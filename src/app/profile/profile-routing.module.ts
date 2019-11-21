import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { PackageComponent } from './package_admin/package.component';
import { HotelComponent } from './hotel_admin/hotel.component';
import { EventComponent } from './event_admin/event.component';
import { PaymentComponent } from './payment_admin/payment.component';
import { TouristPointComponent } from './tourist-point/tourist-point.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'package', component: PackageComponent },
  { path: 'tourist_point', component: TouristPointComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'event', component: EventComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
