import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TouristPointComponent } from './tourist-point.component';

const routes: Routes = [{ path: '', component: TouristPointComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouristPointRoutingModule { }
