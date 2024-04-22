import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { PrivacyScreenComponent } from './privacy-screen/privacy-screen.component';
import { FacebookRemovalScreenComponent } from './facebook-removal-screen/facebook-removal-screen.component';

const routes: Routes = [
  {
    path: '', component: RegisterScreenComponent
  },
  {
    path:'privacidade', component: PrivacyScreenComponent
  },
  {
    path:'privacidade/remover-facebook', component: FacebookRemovalScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
