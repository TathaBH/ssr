import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../user-data';
import { Observable, concatMap, forkJoin, of, tap } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:string[] = ['Jack', 'Hanah', 'George', 'Luke', 'Tom']
  updatedGrades!: number[]
  apiData:any
  userInfo: UserData[] = []
  constructor(private httpClient: HttpClient) {

  }

  updateGrades() {
    this.updatedGrades = [94, 88, 72, 68, 40]
  }

  newUser(newUser:string) {
    console.log(newUser)

    this.users.push(newUser)
  }

  getUsers() {
    // const worker = new Worker(new URL('../users.worker.ts', import.meta.url))
    // worker.postMessage(d)      
    // worker.onmessage = (data) => {
    //   console.log(data)
    // }

    // this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
     
    //   Object.values(data).map(d => {
    //     this.userInfo.push({
    //       name:d.name, username: d.username, email: d.email
    //     })
    //   })
    //   // console.log(this.userInfo)
            
    // })

    // const endpoints = [
    //   this.httpClient.get('https://jsonplaceholder.typicode.com/users'),
    //   this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
    // ]
    
    
    // forkJoin(endpoints).subscribe(data => {
    //   console.log(data)
    // })

    of([1,2,3,4,5]).pipe(
      concatMap(d => d)
    ).subscribe(x => console.log(x))
    // this.httpClient.get('https://jsonplaceholder.typicode.com/users/3').pipe(
    //   tap(d => { this.apiData = d }),
    //   concatMap(d => {
  
    //     return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${this.apiData.id}`)
    //   })
    // ).subscribe(res => console.log(res))

    
  }

}
