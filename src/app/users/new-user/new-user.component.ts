import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApidataService } from 'src/app/services/apidata.service';
import { User } from 'src/app/users.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

 private DataService=inject(ApidataService)
 private router=inject(Router)
  @Output() add=new Subject<{id:number,
    name:string,
    address:{street:string,city:string},
    email:string,
    phone:string,
    company:{name:string}
  }>()
  newUserForm= new FormGroup({
    id:new FormControl(NaN,Validators.required),
    name:new FormControl('',Validators.required),
    address:new FormGroup({
      street:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required)
    }),
    email:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    company:new FormGroup({
      name:new FormControl('',Validators.required),
    }),
    
  })
  get emailIsInvalid()
  {
    return(
      this.newUserForm.controls.email.touched &&
      this.newUserForm.controls.email.dirty &&
      this.newUserForm.controls.email.invalid
    )
  }
  get IdIsInvalid()
  {
    return(
      this.newUserForm.controls.id.touched &&
      this.newUserForm.controls.id.dirty &&
      this.newUserForm.controls.id.invalid
    )
  }
  onSubmit()
  {
       if(! (this.emailIsInvalid&&this.IdIsInvalid))
       {
        const newUser:User={
          id:this.newUserForm.value.id as number,
          email:this.newUserForm.value.email as string,
          name:this.newUserForm.value.name as string,
          phone:this.newUserForm.value.phone as string,
          company:{name:this.newUserForm.value.company?.name as string},
          address:{street:this.newUserForm.value.address?.street as string,
            city:this.newUserForm.value.address?.city as string
          }
        }
        this.DataService.addUser(newUser).subscribe((data)=>{ 
          this.router.navigate(['/home']); 
        })


       }


  }


}
