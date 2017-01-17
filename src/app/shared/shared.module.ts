import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Dhis2MenuComponent} from "./components/dhis2-menu/dhis2-menu.component";
import {MetadataPackageService} from "./providers/metadata-package.service";
import {FilterPipe} from "./pipes/filter.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Dhis2MenuComponent,
    FilterPipe
  ],
  providers: [
    MetadataPackageService
  ],
  exports: [
    Dhis2MenuComponent,
    FilterPipe
  ]
})
export class SharedModule { }
