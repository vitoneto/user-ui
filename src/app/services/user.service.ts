import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/users/';
  currentuser: any;

  constructor(public http: HttpClient) { }


  getUsers() {
    return new Promise((resolve, reason) => {
      this.http.get(this.url).subscribe(
        (response: any) => resolve(response),
        (response: any) => reason(response)
      )
    })
  }

  updateUser(user: user) {
    return new Promise((resolve, reason) => {
      this.http.put(this.url + this.currentuser.id, user).subscribe(
        (response: any) => resolve(response),
        (response: any) => reason(response)
      )
    })
  }
}
