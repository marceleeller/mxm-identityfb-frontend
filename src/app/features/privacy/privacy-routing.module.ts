import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyScreenComponent } from './privacy-screen/privacy-screen.component';

const routes: Routes = [
  {
    path: '', component: PrivacyScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyRoutingModule { }
