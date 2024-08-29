import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DisplayAllUsersComponent } from './users/display-all-users/display-all-users.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FundamentalNgxCoreModule, ShellbarLogoComponent } from '@fundamental-ngx/core';
import { NewUserComponent } from './users/new-user/new-user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AdminLoginComponent } from './users/auth/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayAllUsersComponent,
    NavBarComponent,
    NewUserComponent,
    EditUserComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FundamentalNgxCoreModule,
    FormsModule,
    ReactiveFormsModule,
    ShellbarLogoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
