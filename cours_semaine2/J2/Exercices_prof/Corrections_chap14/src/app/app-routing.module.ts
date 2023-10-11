import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {PastriesComponent} from "./pastries/pastries.component";
import {DescriptionComponent} from "./description/description.component";

const routes: Routes = [
  {
    path: 'pastries',
    component: PastriesComponent
  },
  {
    path: '',
    redirectTo: '/pastries',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pastrie/:id',
    component: DescriptionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
