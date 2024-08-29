import { AfterViewChecked, AfterViewInit, Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { AuthadminService } from '../services/authadmin.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  @Output()Clicked=new EventEmitter<boolean>(false);
  private AuthData=inject(AuthadminService)
  LoginAuth:any
ngOnInit(): void {
  this.AuthData.getEvent().subscribe((data)=>{
    this.LoginAuth=data
  })
}
  onClick()
  {
    this.Clicked.emit(true)
  
  }
  


  

}
