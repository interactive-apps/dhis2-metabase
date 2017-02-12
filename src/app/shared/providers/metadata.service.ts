import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Observable, BehaviorSubject} from "rxjs"
import {MetadataPackage} from "../models/metadata-package";
import {Metadata} from "../models/metadata";
import {isArray} from "util";

@Injectable()
export class MetadataService {

  public metadatas: Observable<Metadata[]>;
  private _metadatasPool: BehaviorSubject<Metadata[]>;
  private dataStore: {
    metadatas: Metadata[]
  };

  constructor(private http: Http) {
    this.dataStore = {metadatas: []};
    this._metadatasPool = <BehaviorSubject<Metadata[]>> new BehaviorSubject([]);
    this.metadatas = this._metadatasPool;
  }

  //Methods
  loadByPackage(metadataPackage: MetadataPackage, packageVersion: number): Observable<any> {
    return Observable.create(observer => {
      let metadataHref: string = '';
      metadataPackage.versions.forEach(versionItem => {
        if(versionItem.version === packageVersion) {
          metadataHref = versionItem.url;
        }
      });
      this.http.get(metadataHref).map(res => res.json()).subscribe(metadata => {
        //Check if something exit on metadata for this package id
        if (this.dataStore.metadatas[metadataPackage.id])  {
          this.dataStore.metadatas[metadataPackage.id].versions.push(this.compiledMetadata(metadata, packageVersion));
        } else {

          this.dataStore.metadatas[metadataPackage.id] = {
            packageId: metadataPackage.id,
            versions: [this.compiledMetadata(metadata, packageVersion)]
          };
        }
        //persist apps into the pool
        this._metadatasPool.next(Object.assign({}, this.dataStore).metadatas);
        observer.next(this.dataStore.metadatas);
        observer.complete();
      }, error => {
        observer.error(false);
        observer.complete();
      });
    });
  }

  findByPackage(metadataPackage: MetadataPackage, packageVersion: number): Observable<any> {
    return Observable.create(observer => {
      this.metadatas.subscribe(metadataData => {
        if(metadataData[metadataPackage.id]) {
          metadataData[metadataPackage.id].versions.forEach(versionItem => {
            if(versionItem.version === packageVersion) {
              observer.next(versionItem);
              observer.complete();
            }
          })
        } else {
          //load from source if pool has no data
          this.loadByPackage(metadataPackage, packageVersion).subscribe(metadata => {
            metadata[metadataPackage.id].versions.forEach(versionItem => {
              if(versionItem.version === packageVersion) {
                observer.next(versionItem);
                observer.complete();
              }
            })
          }, error => {
            observer.error(error);
            observer.complete();
          });
        }
      });
    });
  }

  compiledMetadata(metadata, packageVersion: number): any {
    let metadataCount: any = {};
    let metadataItems: Array<string> = [];
    Object.keys(metadata).map(key => {
      if(isArray(metadata[key])) {
        metadataItems.push(key);
        metadataCount[key] = metadata[key].length
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
