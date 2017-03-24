import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dhis2MenuComponent } from './components/dhis2-menu/dhis2-menu.component';
import {Constants} from "./constants";
import { MenuComponent } from './components/menu/menu.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ReadableNamePipe } from './pipes/readable-name.pipe';
import {MetadataPackageService} from "./providers/metadata-package.service";
import {Store} from "./providers/store";
import { PackageVersionSelectComponent } from './components/package-version-select/package-version-select.component';
import {FormsModule} from "@angular/forms";
import { ImportButtonComponent } from './components/import-button/import-button.component';
import {MetadataImportService} from "./providers/metadata-import.service";
import {MetadataService} from "./providers/metadata.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [Dhis2MenuComponent, MenuComponent, FilterPipe, ReadableNamePipe, PackageVersionSelectComponent, ImportButtonComponent],
  providers: [Constants, MetadataPackageService, Store, MetadataImportService, MetadataService],
  exports: [Dhis2MenuComponent, MenuComponent, FilterPipe, PackageVersionSelectComponent, ImportButtonComponent, ReadableNamePipe]
})
export class SharedModule { }
