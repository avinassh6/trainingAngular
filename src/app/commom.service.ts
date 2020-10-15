import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommomService {

  constructor() { }

  private user = new BehaviorSubject<string>('john');

  castUser = this.user.asObservable();
  // tslint:disable-next-line: typedef
  sendMessage(newUser){
    this.user.next(newUser);
  }

}


