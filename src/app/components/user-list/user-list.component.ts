import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: any[] = [];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().then(
      (response: any) => {this.userList = response
      console.log(this.userList)}
    )
    .catch(
      (error: any) => console.log(error)
    );
  }

  saveUser(user: user) {
    this.userService.currentuser = user;
  }

}
