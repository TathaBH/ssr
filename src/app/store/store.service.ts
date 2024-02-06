import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  fetchUserData() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      let uD = Object.values(data)
      console.log(uD)
    })
  }
}
