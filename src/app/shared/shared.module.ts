import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BaseCardComponent } from './base-card/base-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BaseCardComponent
  ],
  exports:[
    HeaderComponent,
    BaseCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
