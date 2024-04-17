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
      path:'main', loadChildren:()=> import('./features/main/main.module').then(module => module.MainModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
