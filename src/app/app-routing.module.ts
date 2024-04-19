import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
  path:'', children:[
    {
    path:'login', loadChildren:()=> import('./features/login/login.module').then(module => module.LoginModule)
    },
    {
      path:'home', loadChildren:()=> import('./features/main/main.module').then(module => module.MainModule)
    },
    {
      path:'terms-of-service', loadChildren:()=> import('./features/terms/terms.module').then(module => module.TermsModule)
    },
    {
      path:'privacy-policy', loadChildren:()=> import('./features/privacy/privacy.module').then(module => module.PrivacyModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
