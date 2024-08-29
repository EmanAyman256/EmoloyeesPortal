import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApidataService } from 'src/app/services/apidata.service';
import { User } from 'src/app/users.model';

@Component({
  selector: 'app-display-all-users',
  templateUrl: './display-all-users.component.html',
  styleUrls: ['./display-all-users.component.css'],
})
export class DisplayAllUsersComponent implements OnInit {
  users:User[]=[]
  private router=inject(Router)
  private UserData=inject(ApidataService)
  updatedUser?:User
  updated=false;

  ngOnInit() {
    this.UserData.users$.subscribe((data)=>
    {
      this.users=data
    })
  }
trackById(id:number,user:User)
{
  return user.id
}
deleteUser(id:any)
{
  this.UserData.removeUser(id).subscribe(()=>{
    this.users=this.users.filter(user=>user.id !== id)
    this.router.navigate(['/home'])
    
  })
}
onUpdateUser(user: User) {
  this.updated = true;
  this.updatedUser = user;
}
updateUser(userUpdated:User)
{

  const index = this.users.findIndex((user) => user.id === userUpdated.id);
    if (index !== -1) {
      this.users[index] = userUpdated;
      console.log(userUpdated.id);
      
    }
    this.updated = false;
    this.updatedUser = undefined;
  }
onAddUser(user: User)
{
     
     this.users.push(user);
   
}
}
