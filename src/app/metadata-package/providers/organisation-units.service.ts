import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import {scan} from "rxjs/operator/scan";

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
          let scanResult =  {};
          let conflicts = [];
          //Check if orgunit exist in the system
          this.findFromSystem(orgUnit.id)
            .subscribe(
              found => {
                scanResult['exist'] = true;
              }, notFound => {
                scanResult['exist'] = false;
              })

          //show if it has parent
          if(orgUnit.hasOwnProperty('parent')) {
            scanResult['parentAvailable'] = true;
            if(!this.isParentAvailable(orgUnits,orgUnit.parent.id)) {
              conflicts.push('No parent object')
            }
          } else {
            scanResult['parentAvailable'] = false;
            conflicts.push('Parent not found')
          }
          scanResult['conflicts'] = conflicts;
          orgUnit.scanResult = scanResult;
        });
        this.organisationUnitPool = orgUnits;
        observer.next(this.organisationUnitPool);
        observer.complete()
      }
    });
  }

  findFromSystem(orgunitId): Observable<any> {
    return this.http.get('../../../api/organisationUnits/' + orgunitId + '.json?fields=id')
      .map((res: Response) => res.json())
  }

  isParentAvailable(orgUnitArray, parentId): boolean {
    let found: boolean = false;
    for (let orgUnit of orgUnitArray) {
      if(orgUnit.id == parentId) {
        found = true;
        break;
      }
    }

    if(!found) {
      this.findFromSystem(parentId).subscribe(exist => {
        found = true;
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
