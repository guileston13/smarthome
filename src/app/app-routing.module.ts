//import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './login/register/register.module#RegisterPageModule' },
  {
    path: 'smart',
    loadChildren: './smart/smart-routing.module#SmartRoutingModule'
  },
  {
    path: 'ip-address',
    loadChildren: () => import('./login/ip-address/ip-address.module').then(m => m.IpAddressPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }