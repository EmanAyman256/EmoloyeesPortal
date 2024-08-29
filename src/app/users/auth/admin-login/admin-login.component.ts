import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthadminService } from 'src/app/services/authadmin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent  {
private router=inject(Router)
form=new FormGroup({
  email:new FormControl('',Validators.required),
  password:new FormControl('',{validators:[Validators.minLength(6),Validators.required]})
});
private isLoginEvent=inject(AuthadminService);
constructor()
{
  this.isLoginEvent.emitEvent(false)
}

onSubmit()
{
  if(this.form.value.email==="admin@example.com" && this.form.value.password==="admin123")
  {
    this.isLoginEvent.emitEvent(true)
    this.router.navigate(['/home'])
  }
  else
  {
    this.isLoginEvent.emitEvent(false)
    this.router.navigate(['/auth'])
  }
}



}
