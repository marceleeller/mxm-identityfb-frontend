import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PrivacyScreenComponent } from './privacy-screen/privacy-screen.component';
import { FacebookRemovalScreenComponent } from './facebook-removal-screen/facebook-removal-screen.component';


@NgModule({
  declarations: [
    RegisterScreenComponent,
    PrivacyScreenComponent,
    FacebookRemovalScreenComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
