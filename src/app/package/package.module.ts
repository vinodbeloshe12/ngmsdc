import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//third party
import { NgxGalleryModule } from 'ngx-gallery';
import { ShareButtonsModule } from '@ngx-share/buttons';


import { PackageComponent } from './package.component';
import { PackageRoutingModule } from './package.routing';

@NgModule({
  imports: [
    CommonModule,
    NgxGalleryModule,
    HttpClientModule, // (Required) for share counts
    ShareButtonsModule,
    PackageRoutingModule
  ],
  declarations: [PackageComponent]
})
export class PackageModule { }
