import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSummernoteModule } from 'ngx-summernote';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PackageComponent } from './package_admin/package.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EventComponent } from './event_admin/event.component';
import { HotelComponent } from './hotel_admin/hotel.component';
import { PaymentComponent } from './payment_admin/payment.component';
import { TouristPointModule } from './tourist-point/tourist-point.module';
// import { TouristPointComponent } from './tourist-point/tourist-point.component';


@NgModule({
  declarations: [ProfileComponent, PackageComponent, SidebarComponent, HotelComponent, EventComponent, PaymentComponent],
  imports: [
    CommonModule,
    NgxSummernoteModule,
    FormsModule,
    ProfileRoutingModule,
    TouristPointModule
  ]
})
export class ProfileModule { }
