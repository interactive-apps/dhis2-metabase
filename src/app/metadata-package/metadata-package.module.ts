import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetadataPackageComponent } from './metadata-package.component';
import { ViewPackageComponent } from './pages/view-package/view-package.component';
import {MetadataPackageRoutingModule} from "./metadata-package.routing";
import {TabsModule} from "ng2-bootstrap";
import {SharedModule} from "../shared/shared.module";
import { OrganisationUnitsComponent } from './components/organisation-units/organisation-units.component';
import {OrganisationUnitsService} from "./providers/organisation-units.service";
import { MetadataDetailsComponent } from './pages/metadata-details/metadata-details.component';
import { MetadataImportComponent } from './pages/metadata-import/metadata-import.component';

@NgModule({
  imports: [
    CommonModule,
    MetadataPackageRoutingModule,
    TabsModule.forRoot(),
    SharedModule
  ],
  declarations: [MetadataPackageComponent, ViewPackageComponent, OrganisationUnitsComponent, MetadataDetailsComponent, MetadataImportComponent],
  providers: [OrganisationUnitsService]
})
export class MetadataPackageModule { }
