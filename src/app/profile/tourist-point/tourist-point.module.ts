import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouristPointRoutingModule } from './tourist-point-routing.module';
import { TouristPointComponent } from './tourist-point.component';


@NgModule({
  declarations: [TouristPointComponent],
  imports: [
    CommonModule,
    TouristPointRoutingModule
  ]
})
export class TouristPointModule { }
