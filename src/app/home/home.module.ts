import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HomeRoutingModule} from "./home.routing.module";
import {HomeComponent} from "./home.component";
import { SettingsComponent } from './components/settings/settings.component';
import { TipsComponent } from './components/tips/tips.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, SettingsComponent, TipsComponent],
  exports: [],
  providers: []
})

export class HomeModule {}
