import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetadataPackageRoutingModule } from './metadata-package-routing.module';
import {MetadataPackageComponent} from "./metadata-package.component";
import { ViewPackageComponent } from './pages/view-package/view-package.component';
import {SharedModule} from "../shared/shared.module";
import { MetadataSummaryComponent } from './components/metadata-summary/metadata-summary.component';
import { ImportPackageComponent } from './pages/import-package/import-package.component';
import { MetadataDetailsComponent } from './components/metadata-details/metadata-details.component';
import {TabsModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    MetadataPackageRoutingModule,
    SharedModule,
    TabsModule.forRoot()
  ],
  declarations: [
    MetadataPackageComponent,
    ViewPackageComponent,
    MetadataSummaryComponent,
    ImportPackageComponent,
    MetadataDetailsComponent
  ]
})
export class MetadataPackageModule { }
