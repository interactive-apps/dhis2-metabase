import {Component, OnInit, Input} from '@angular/core';
import {OrganisationUnitsService} from "../../providers/organisation-units.service";

@Component({
  selector: 'app-organisation-units',
  templateUrl: './organisation-units.component.html',
  styleUrls: ['./organisation-units.component.css']
})
export class OrganisationUnitsComponent implements OnInit {
  @Input() orgUnits: Array<any>;
  scannedOrgUnits: Array<any>;
  currentSelected: any;
  constructor(private orgUnitService: OrganisationUnitsService) {
    this.currentSelected = '';
  }

  ngOnInit() {
    this.orgUnitService.getScannedOrgUnits(this.orgUnits)
      .subscribe(scannedOrgunits => {
        console.log(scannedOrgunits)
        this.scannedOrgUnits = scannedOrgunits;
      })
  }

  toggle(id) {
    this.currentSelected = this.currentSelected == id ? '' : id;
  }

}
