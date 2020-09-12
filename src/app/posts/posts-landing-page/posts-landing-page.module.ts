import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../material.module';

import { PostLandingPageRoutingModule } from './posts-routing.module';
import { PostLandingPageComponent } from './posts-landing-page.component';


@NgModule({
  declarations: [PostLandingPageComponent],
  imports: [
    CommonModule,
    PostLandingPageRoutingModule,
    MaterialModule
  ]
})
export class PostLandingPageModule { }
