import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouristPointRoutingModule } from './tourist-point-routing.module';
import { TouristPointComponent } from './tourist-point.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TouristPointComponent],
  imports: [
    CommonModule,
    TouristPointRoutingModule,
    NgxSummernoteModule,
    FormsModule
  ],
  // exports: [TouristPointComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TouristPointModule { }
