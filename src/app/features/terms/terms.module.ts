import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsRoutingModule } from './terms-routing.module';
import { TermsScreenComponent } from './terms-screen/terms-screen.component';


@NgModule({
  declarations: [
    TermsScreenComponent
  ],
  imports: [
    CommonModule,
    TermsRoutingModule
  ]
})
export class TermsModule { }
