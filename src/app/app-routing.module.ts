import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

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
      path:'register', loadChildren:()=> import('./features/register/register.module').then(module => module.RegisterModule)
    },
    {
      path:'home', loadChildren:()=> import('./features/main/main.module').then(module => module.MainModule), canActivate:[authGuard]
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
