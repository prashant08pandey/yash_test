import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProjectComponent} from './project/project.component';
import { RelocateComponent } from './relocate/relocate.component';

const routes: Routes = [
  {path:  '', pathMatch:  'full', redirectTo:  'app'},
  {path: 'Relocate', component: RelocateComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Projects', component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
