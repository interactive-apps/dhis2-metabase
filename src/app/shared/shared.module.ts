import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Dhis2MenuComponent} from "./components/dhis2-menu/dhis2-menu.component";
import {MetadataPackageService} from "./providers/metadata-package.service";
import {FilterPipe} from "./pipes/filter.pipe";
import {MetadataService} from "./providers/metadata.service";
import { ReadableNamePipe } from './pipes/readable-name.pipe';

@NgModule({
  imports: [
    CommonModule
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
    ReadableNamePipe
  ]
})
export class SharedModule { }
