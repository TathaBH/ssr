import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, of, map, switchMap, startWith, debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ssr';

  constructor(private routes:Router) {}

  ngOnInit() {
    if(localStorage.getItem('loginStatus')) {
      this.routes.navigate(['users'])
    }

    //of(70, 72, 76, 79, 75).pipe(startWith(100)).subscribe(x=>console.log(x))

    of(70, 72, 72, 76, 79, 75).pipe(debounceTime(1)).subscribe(x=>console.log(x))
    
  }
}
