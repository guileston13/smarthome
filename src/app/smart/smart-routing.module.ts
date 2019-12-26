
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  {
    path: 'trial',
    loadChildren: () => import('./trial/trial.module').then(m => m.TrialPageModule)
  },
  {
    path: 'appliances',
    loadChildren: () => import('./appliances/appliances.module').then(m => m.AppliancesPageModule)
  },
  {
    path: 'door',
    loadChildren: () => import('./door/door.module').then(m => m.DoorPageModule)
  },
  {
    path: 'cctv',
    loadChildren: () => import('./cctv/cctv.module').then(m => m.CctvPageModule)
  },
  {
    path: 'firealarm',
    loadChildren: () => import('./firealarm/firealarm.module').then(m => m.FirealarmPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartRoutingModule { }