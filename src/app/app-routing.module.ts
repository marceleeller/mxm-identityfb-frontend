import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/entrar',
    pathMatch: 'full'
  },
  {
  path:'', children:[
    {
      path:'entrar', loadChildren:()=> import('./features/login/login.module').then(module => module.LoginModule)
    },
    {
      path:'registrar', loadChildren:()=> import('./features/register/register.module').then(module => module.RegisterModule)
    },
    {
      path:'principal', loadChildren:()=> import('./features/main/main.module').then(module => module.MainModule), canActivate:[authGuard]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
