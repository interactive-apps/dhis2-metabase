import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable, BehaviorSubject} from "rxjs"
import {MetadataPackage} from "../models/metadata-package";
import {isUndefined} from "util";

@Injectable()
export class MetadataPackageService {

  public metadataPackagePool: MetadataPackage[];
  private baseUrl: string;

  constructor(private http: Http) {
    //@todo this repo is hardcoded, future suppport for mutliple repositories
    this.baseUrl = 'https://raw.githubusercontent.com/dhis2/dhis2-metadata-repo/master/repo/26/index.json';
    this.metadataPackagePool = [];
  }

  //Methods
  loadAll(): Observable<any> {
    return Observable.create(observer => {
      //load data from the pool first
      if(this.metadataPackagePool.length > 0) {
        observer.next(this.metadataPackagePool);
        observer.complete();
      } else {
        //load data from the source if pool is empty
        this.http.get(this.baseUrl).map(res => res.json()).subscribe(response => {
          this.metadataPackagePool.push(response.packages);
          observer.next(response.packages);
          observer.complete();
        }, error => {observer.error(error)})
      }
    });
  }

  find(id: string): Observable<MetadataPackage> {
    return Observable.create(observer => {
      let metadataPackage = this.metadataPackagePool.filter((poolItem) => {return poolItem.id === id? poolItem : null;})[0];
      if(!isUndefined(metadataPackage)) {
        observer.next(metadataPackage);
        observer.complete();
      } else {
        this.loadAll().subscribe(metadataPackages => {
          let metadataPackage = metadataPackages.filter((packageItem) => {return packageItem.id === id? packageItem : null;})[0]
          if(!isUndefined(metadataPackage)) {
            observer.next(metadataPackage);
            observer.complete();
          } else {
            observer.error('MetadataPackage with id "'+ id + '" could not be found or may have been deleted');
          }
        }, error => {
          observer.error('MetadataPackage with id "'+ id + '" could not be found or may have been deleted');
        })
      }
    });
  }

  findLatestVersion(metadataPackageId: string): Observable<number> {
    return Observable.create(observer => {
      let versionArray = [];
      this.find(metadataPackageId).subscribe(
        metadataPackage => {
          metadataPackage.versions.forEach(version => {
            versionArray.push(version.version);
          });
          versionArray = versionArray.sort((a, b) => a - b);
          observer.next(versionArray[0]);
          observer.complete();
        },
        error => {observer.error(error)});
    })
  }

}
