import { ModuleWithProviders }  from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";

export const HomeRoutingModule: ModuleWithProviders = RouterModule.forChild([
  {path: '', component: HomeComponent}
]);
