import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {

  private isLoginSubj=new Subject<boolean>();
  emitEvent(isLogin:boolean)
  {
   this.isLoginSubj.next(isLogin)
  }
  getEvent() {
    return this.isLoginSubj.asObservable();
  }

}
