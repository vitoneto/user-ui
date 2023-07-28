import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  localUrl = 'http://localhost:3000/users/';
  mockUrl = 'https://64c3bbed67cfdca3b6603210.mockapi.io/api/v1/users/';
  url = this.mockUrl;
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

  deleteUser(user: user) {
    return new Promise((resolve, reason) => {
      this.http.delete(this.url + user.id).subscribe(
        (response: any) => resolve(response),
        (response: any) => reason(response)
      )
    })
  }

  createUser(user: user) {
    return new Promise((resolve, reason) => {
      this.http.post(this.url, user).subscribe(
        (Response: any) => resolve(Response),
        (Response: any) => reason(Response),
      )
    })
  }
}
