import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Observable, BehaviorSubject} from "rxjs"
import {MetadataPackage} from "../models/metadata-package";
import {Metadata} from "../models/metadata";
import {isArray} from "util";
import {MetadataPackageService} from "./metadata-package.service";
import {isUndefined} from "util";

@Injectable()
export class MetadataService {

  public metadataPool: Metadata[];

  constructor(
    private http: Http,
    private metadataPackageService: MetadataPackageService
  ) {
    this.metadataPool = [];
  }

  //Methods
  loadByPackage(metadataPackage: MetadataPackage, packageVersion: number): Observable<any> {
    return Observable.create(observer => {
      let metadataHref = metadataPackage.versions.filter((versionItem) => {return versionItem.version === packageVersion? versionItem.url: null;})[0];
      if(!isUndefined(metadataHref)) {
        this.http.get(metadataHref).map(res => res.json()).subscribe(metadata => {
          //Check if something exit on metadata for this package id
          let compiledMetadata = this.compiledMetadata(metadata, packageVersion);
          if (this.metadataPool[metadataPackage.id])  {
            this.metadataPool[metadataPackage.id].versions.push(compiledMetadata);
          } else {
            this.metadataPool[metadataPackage.id] = {
              packageId: metadataPackage.id,
              versions: [compiledMetadata]
            };
          }
          observer.next(compiledMetadata);
          observer.complete();
        }, error => {
          observer.error(error);
        });
      } else {
        //@todo handle errors when url not found
        console.log('cannot find metadata');
        observer.error('cannot find metadata');
      }
    });
  }

  findByPackage(metadataPackageId: string, packageVersion: number): Observable<any> {
    return Observable.create(observer => {
      let metadata = this.metadataPool[metadataPackageId] ? this.metadataPool[metadataPackageId].versions.filter((versionItem) => {return versionItem.version === packageVersion? versionItem.metadata: null;})[0] : 'undefined';
      if(!isUndefined(metadata)) {
        observer.next(metadata);
        observer.complete();
      } else {
        this.metadataPackageService.find(metadataPackageId)
          .subscribe(metadataPackage => {
              //load from source if pool has no data
              this.loadByPackage(metadataPackage, packageVersion).subscribe(metadata => {
                observer.next(metadata);
                observer.complete();
                })
              }, error => {
                observer.error(error);
              });
      }
    });
  }

  compiledMetadata(metadata, packageVersion: number): any {
    let metadataCount: any = {};
    let metadataItems: Array<string> = [];
    Object.keys(metadata).map(key => {
      if(isArray(metadata[key])) {
        metadataItems.push(key);
        metadataCount[key] = metadata[key].length;
      }
    });
    return {
      items: metadataItems,
      count: metadataCount,
      version: packageVersion,
      metadata: metadata
      };
  }

  importMetadata(dryRun: boolean, metadata: any) {
    this.http.post('../../../api/metadata?dryRun='+ dryRun + '&strategy=CREATE_AND_UPDATE', metadata)
      .map(res => res.json())
      .subscribe(importResult => {
        console.log(this.compileImportSummary(importResult))
      }, error => {
        console.log(error)
      });
  }

  compileImportSummary(response) {
    let responseSummary: Array<any> = [];
    responseSummary['overallImportCounts'] = response.stats ? response.stats : response.importCount;
    responseSummary['importCountsPerMetadata'] = this.getImportCountPerMetadata(response.typeReports ? response.typeReports : response.importTypeSummaries);
    responseSummary['importConflicts'] = this.compileImportConflicts(response.typeReports ? response.typeReports : response.importTypeSummaries);
    return responseSummary;
  }

  compileImportConflicts(summary) {
    let conflicts: Array<any> = [];
    //Get conflict summary if exist
    summary.forEach((summaryItem, summaryKey) => {
      if(summaryItem.importConflicts) {
        summaryItem.importConflicts.forEach((conflict, summaryKey) => {
          conflicts[summaryKey] = {
            element: conflict.object,
            description: conflict.value,
            type: summaryItem.type
          }
        });
      } else if(summaryItem.objectReports) {
        summaryItem.objectReports.forEach((conflict, summaryKey) => {
          conflicts[summaryKey] = {
            description: conflict.errorReports,
            type: conflict.klass.split(".")[4]
          }
        });
      }
    });
    return conflicts;
  }
  getImportCountPerMetadata(summary) {
    let compiledImportCount: Array<any> = [];
    summary.forEach((summaryItem, summaryKey) => {
      compiledImportCount[summaryKey] = {
        type: summaryItem.klass ? summaryItem.klass.split(".")[4] : summaryItem.type,
        count: summaryItem.stats ? summaryItem.stats : summaryItem.importCount
      };
    });
    return compiledImportCount;
  }
}
