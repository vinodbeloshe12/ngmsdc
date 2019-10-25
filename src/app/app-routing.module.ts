import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { PackageComponent } from './package/package.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'booknow', component: BookingComponent },
  // { path: 'package/:name', component: PackageComponent },
 
  { path: 'package/:name', loadChildren: () => import('./package/package.module').then(m => m.PackageModule) },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
