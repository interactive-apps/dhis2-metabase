import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Dhis2MenuComponent} from "./components/dhis2-menu/dhis2-menu.component";
import {MetadataPackageService} from "./providers/metadata-package.service";
import {FilterPipe} from "./pipes/filter.pipe";
import {MetadataService} from "./providers/metadata.service";
import { ReadableNamePipe } from './pipes/readable-name.pipe';
import {MomentModule} from "angular2-moment";

@NgModule({
  imports: [
    CommonModule,
    MomentModule
  ],
  declarations: [
    Dhis2MenuComponent,
    FilterPipe,
    ReadableNamePipe
  ],
  providers: [
    MetadataPackageService,
    MetadataService
  ],
  exports: [
    Dhis2MenuComponent,
    FilterPipe,
    ReadableNamePipe,
    MomentModule
  ]
})
export class SharedModule { }
