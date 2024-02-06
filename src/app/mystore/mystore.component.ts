import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { storeAction } from '../store/store.action';
import { Observable } from 'rxjs';
import { UserData } from '../user-data';

@Component({
  selector: 'app-mystore',
  templateUrl: './mystore.component.html',
  styleUrls: ['./mystore.component.css']
})
export class MystoreComponent {

  x: Observable<any> = this.store.select('addition')
  u: UserData = {name:'tatha', username:'tathabhk', email:'tatha@gmail.com'}
  constructor(private store: Store<{addition: UserData}>){}
  show() {
    this.store.dispatch(storeAction(this.u))
  }
}
