import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApidataService } from 'src/app/services/apidata.service';
import { User } from 'src/app/users.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
      @Input() user!: User;
      userId!: number;
      @Output() update = new EventEmitter<User>();
      enteredName=''
      enteredPhone=''
      enteredEmail=''
      street!:string
      city!:string
      nameCompany!:string

  constructor(private dataApi: ApidataService, private router: Router ,private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('userId')!;


    this.dataApi.getUserById(this.userId).subscribe((user)=>{

      this.enteredEmail=user.email
      this.enteredName=user.name
      this.enteredPhone=user.phone
       this.street=user.address.street
       this.city=user.address.city
       this.nameCompany=user.company.name

    })
  }

  onSubmit() {
    if (this.enteredEmail && this.enteredName && this.enteredPhone)
    {
      const editedUser: User = {
        ...this.user,
        id: this.userId,
        name: this.enteredName,
        email: this.enteredEmail!,
        phone: this.enteredPhone,
        address: { street:this.street, city:this.city }, 
        company: { name: this.nameCompany } 
      };
      this.dataApi.updateUser(editedUser).subscribe(()=>{
        this.router.navigate(['/home'])
      });
    }
  }
}
