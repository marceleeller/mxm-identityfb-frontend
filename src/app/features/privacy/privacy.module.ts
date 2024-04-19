import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyScreenComponent } from './privacy-screen/privacy-screen.component';


@NgModule({
  declarations: [
    PrivacyScreenComponent
  ],
  imports: [
    CommonModule,
    PrivacyRoutingModule
  ]
})
export class PrivacyModule { }
