import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetadataPackageComponent } from './metadata-package.component';
import { ViewPackageComponent } from './pages/view-package/view-package.component';
import {MetadataPackageRoutingModule} from "./metadata-package.routing";
import {TabsModule} from "ng2-bootstrap";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    MetadataPackageRoutingModule,
    TabsModule,
    SharedModule
  ],
  declarations: [MetadataPackageComponent, ViewPackageComponent]
})
export class MetadataPackageModule { }
