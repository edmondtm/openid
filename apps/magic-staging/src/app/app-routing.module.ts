import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule)},
  {path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
  {path: 'forget', loadChildren: () => import('./forget/forget.module').then(m => m.ForgetModule)},
  {path: 'reset/:key', loadChildren: () => import('./reset/reset.module').then(m => m.ResetModule)},
  {path: '', pathMatch: 'full', redirectTo: 'signin'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
