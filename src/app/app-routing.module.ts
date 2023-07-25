import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'detail',
    component:UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
