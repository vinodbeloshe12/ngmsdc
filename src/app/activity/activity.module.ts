import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';


//third party
import { NgxGalleryModule } from 'ngx-gallery';
import { ShareButtonsModule } from '@ngx-share/buttons';


@NgModule({
  declarations: [ActivityComponent],
  imports: [
    CommonModule,
    NgxGalleryModule,
    ShareButtonsModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
