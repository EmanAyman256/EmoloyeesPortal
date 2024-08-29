import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayAllUsersComponent } from './users/display-all-users/display-all-users.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { AdminLoginComponent } from './users/auth/admin-login/admin-login.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
 {
  path:'',
  component:AdminLoginComponent

 },
 {
  path:'edit/:userId',
  component:EditUserComponent
 },
  {
    path:'home',
    component:DisplayAllUsersComponent
  },
  {
    path:'adduser',
    component:NewUserComponent
  },
  {
    path:'auth',
    component:AdminLoginComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
