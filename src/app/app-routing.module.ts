import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { PackageComponent } from './package/package.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'booknow', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'package/:name', component: PackageComponent },

  { path: 'package/:name', loadChildren: () => import('./package/package.module').then(m => m.PackageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'hotels', loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule) },
  { path: 'tourist_point', loadChildren: () => import('./profile/tourist-point/tourist-point.module').then(m => m.TouristPointModule) },
  { path: 'activity/:name', loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule) },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
