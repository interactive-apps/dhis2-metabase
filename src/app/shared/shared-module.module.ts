import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dhis2MenuComponent } from './components/dhis2-menu/dhis2-menu.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    Dhis2MenuComponent,
    FilterPipe
  ],
  exports: [
    Dhis2MenuComponent,
    FilterPipe
  ],
  providers: []
})

export class SharedModule {}
