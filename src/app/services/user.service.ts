import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/users';

  constructor(public http: HttpClient) { }


  getUsers() {
    return new Promise((resolve, reason) => {
      this.http.get(this.url).subscribe(
        (response: any) => resolve(response),
        (response: any) => reason(response)
      )
    })
  }
}
