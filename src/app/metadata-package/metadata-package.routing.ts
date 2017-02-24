import { ModuleWithProviders }  from '@angular/core';
import { RouterModule } from '@angular/router';
import {MetadataPackageComponent} from "./metadata-package.component";
import {ViewPackageComponent} from "./pages/view-package/view-package.component";
import {MetadataDetailsComponent} from "./pages/metadata-details/metadata-details.component";
import {MetadataImportComponent} from "./pages/metadata-import/metadata-import.component";

export const MetadataPackageRoutingModule: ModuleWithProviders = RouterModule.forChild([
  {path: '', component: ViewPackageComponent, children: [
    {path: '', component: MetadataDetailsComponent},
    {path: 'import', component: MetadataImportComponent}
  ]}
]);
