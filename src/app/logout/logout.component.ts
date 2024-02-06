import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private routes:Router) {}

  ngOnInit() {
    if(localStorage.getItem('loginStatus')) {
      localStorage.removeItem('loginStatus')
      this.routes.navigate(["/"])
    }
  }
}
