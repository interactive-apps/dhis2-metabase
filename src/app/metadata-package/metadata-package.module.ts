import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetadataPackageComponent } from './metadata-package.component';
import { ViewPackageComponent } from './pages/view-package/view-package.component';
import {MetadataPackageRoutingModule} from "./metadata-package.routing";
import {TabsModule} from "ng2-bootstrap";
import {SharedModule} from "../shared/shared.module";
import { OrganisationUnitsComponent } from './components/organisation-units/organisation-units.component';
import {OrganisationUnitsService} from "./providers/organisation-units.service";

@NgModule({
  imports: [
    CommonModule,
    MetadataPackageRoutingModule,
    TabsModule.forRoot(),
    SharedModule
  ],
  declarations: [MetadataPackageComponent, ViewPackageComponent, OrganisationUnitsComponent],
  providers: [OrganisationUnitsService]
})
export class MetadataPackageModule { }
