import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";

@Injectable()
export class OrganisationUnitsService {

  organisationUnitPool: Array<any>;
  constructor(private http: Http) {
    this.organisationUnitPool = [];
  }

  getScannedOrgUnits(orgUnits: Array<any>): Observable<Array<any>> {
    return Observable.create(observer => {
      if(this.organisationUnitPool.length > 0) {
        observer.next(this.organisationUnitPool);
        observer.complete();
      } else {
        orgUnits.forEach(orgUnit  => {
          //show if it exist in the system
          orgUnit.available = this.exitInTheSystem(orgUnit.id) ? true : false;
          //show if it has parent
          if(orgUnit.hasOwnProperty('parent')) {
            if(this.isParentAvailable(orgUnits,orgUnit.parent.id, 'array')) {
              orgUnit.parentAvailable = true;
            } else if(this.isParentAvailable(orgUnits,orgUnit.parent.id, 'system')){
              orgUnit.parentAvailable = true
            } else {
              orgUnit.parentAvailable = false;
            }
          }
        });
        this.organisationUnitPool = orgUnits;
        observer.next(this.organisationUnitPool);
        observer.complete()
      }
    });
  }

  exitInTheSystem(orgunitId): Observable<boolean> {
    return Observable.create(observer => {
      this.http.get('../../../api/organisationUnits/' + orgunitId + '.json?fields=id')
        .map((res: Response) => res.json())
        .subscribe(
          orgUnit => {
          observer.next(true);
          observer.complete()
          },
          error => {
            observer.next(false);
          });
    })
  }

  isParentAvailable(orgUnitArray, parentId, source): boolean {
    let found: boolean = false;
    if(source == 'array') {
      for (let orgUnit of orgUnitArray) {
        if(orgUnit.id == parentId) {
          found = true;
          break;
        }
      }
    } else {
      this.exitInTheSystem(parentId).subscribe(exist => {
        found = exist;
      });
    }
    return found;
  }

  canBeLevelOne(): boolean {
    let isLevelOne = false;
    this.http.get('../../../api/organisationUnits.json?paging=false&filter=level:eq:1')
      .map((res: Response) => res.json())
      .subscribe(response => {
        if(response['organisationUnits'].length == 0) {
          isLevelOne = true;
        }
      });
    return true;
  }

}
