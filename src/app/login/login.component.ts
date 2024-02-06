import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userInfo: User[] = [
    {username:'admin', password:'admin'},
    {username:'root', password:'root'},
    {username:'tatha', password:'tatha'}
  ]
  @ViewChild('loginform') logform!: NgForm

  constructor(private routes:Router) {}
  
  useLogin = () => {
    console.log(this.logform.value.username)
    this.userInfo.filter((data) => {
      if(data['username'] == this.logform.value.username && data['password'] == this.logform.value.password){
        localStorage.setItem('loginStatus', '1')
      }
      if(localStorage.getItem('loginStatus')) {
        this.routes.navigate(['users'])
      }
    })
  }

}
