import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HomeRoutingModule} from "./home.routing.module";
import {HomeComponent} from "./home.component";
import { SettingsComponent } from './components/settings/settings.component';
import { HeaderComponent } from './components/header/header.component';
import { TipsComponent } from './components/tips/tips.component';
import { MetadataPackageComponent } from './components/metadata-package/metadata-package.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, SettingsComponent, HeaderComponent, TipsComponent, MetadataPackageComponent],
  exports: [],
  providers: []
})

export class HomeModule {}
