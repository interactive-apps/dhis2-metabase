import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {FeatureRoutingModule} from "./feature-module.routing.module";
import {FeatureModuleComponent} from "./feature-module.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FeatureRoutingModule
  ],
  declarations: [FeatureModuleComponent],
  exports: [],
  providers: []
})

export class FeatureModule {}
