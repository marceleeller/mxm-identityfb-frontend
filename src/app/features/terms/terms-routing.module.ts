import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsScreenComponent } from './terms-screen/terms-screen.component';

const routes: Routes = [
  {
    path: '', component: TermsScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule { }
