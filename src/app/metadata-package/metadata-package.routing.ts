import { ModuleWithProviders }  from '@angular/core';
import { RouterModule } from '@angular/router';
import {MetadataPackageComponent} from "./metadata-package.component";
import {ViewPackageComponent} from "./pages/view-package/view-package.component";

export const MetadataPackageRoutingModule: ModuleWithProviders = RouterModule.forChild([
  {path: '', component: MetadataPackageComponent, children: [
    {path: '', component: ViewPackageComponent}
  ]}
]);
