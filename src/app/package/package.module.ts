import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';


import { PackageComponent } from './package.component';
import { PackageRoutingModule } from './package.routing';

@NgModule({
  imports: [
    CommonModule,
    PackageRoutingModule
  ],
  declarations: [PackageComponent]
})
export class PackageModule { }
