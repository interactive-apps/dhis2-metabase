import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable, BehaviorSubject} from "rxjs"
import {MetadataPackage} from "../models/metadata-package";

@Injectable()
export class MetadataPackageService {

  public metadataPackages: Observable<MetadataPackage[]>;
  private _metadataPackagesPool: BehaviorSubject<MetadataPackage[]>;
  private baseUrl: string;
  private dataStore: {
    metadataPackages: MetadataPackage[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'https://raw.githubusercontent.com/dhis2/dhis2-metadata-repo/master/repo/26/index.json';
    this.dataStore = {metadataPackages: []};
    this._metadataPackagesPool = <BehaviorSubject<MetadataPackage[]>> new BehaviorSubject([]);
    this.metadataPackages = this._metadataPackagesPool;
  }

  //Methods
  loadAll(): Observable<any> {

    return Observable.create(observer => {
      //load data from the pool first
      this.all().subscribe(pool => {
        if(Object.keys(pool).map(key => pool[key]).length > 0) {
          observer.next(Object.keys(pool).map(key => pool[key]));
          observer.complete();
        } else {
          //load data from the source if pool is empty
          this.http.get(this.baseUrl).map(res => res.json()).subscribe(response => {
            this.saveToMetadataPackagePool(response.packages);
            //load data from the pool
            this.all().subscribe(pool => {
              observer.next(Object.keys(pool).map(key => pool[key]));
              observer.complete();
            });
          })
        }
      });
    });
  }

  saveToMetadataPackagePool(data: any): void {
    //Replace dataIndex with metadataPackage id
    let metadataPackageData = [];
    data.forEach((dataItem, dataIndex) => {
      metadataPackageData[dataItem.id] = dataItem;
    });
    this.dataStore.metadataPackages = metadataPackageData;
    //persist apps into the pool
    this._metadataPackagesPool.next(Object.assign({}, this.dataStore).metadataPackages);
  }

  all(): Observable<MetadataPackage[]> {
    return this.metadataPackages;
  }

  find(id: string): Observable<MetadataPackage> {
    return Observable.create(observer => {
      this.metadataPackages.subscribe(metadataPackageData => {
        if(metadataPackageData[id]) {
          observer.next(metadataPackageData[id]);
          observer.complete();
        } else {
          //load from source if pool has no data
          this.loadAll().subscribe(metadataPackageData => {
            if(metadataPackageData[id]) {
              observer.next(metadataPackageData[id]);
              observer.complete();
            } else {
              observer.next('MetadataPackage with id "'+ id + '" could not be found or may have been deleted');
              observer.complete();
            }
          });
        }
      });
    });
  }
}
