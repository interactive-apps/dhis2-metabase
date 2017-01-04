import { ModuleWithProviders }  from '@angular/core';
import { RouterModule } from '@angular/router';
import {FeatureModuleComponent} from "./feature-module.component";

export const FeatureRoutingModule: ModuleWithProviders = RouterModule.forChild([
  {path: '', component: FeatureModuleComponent}
]);
