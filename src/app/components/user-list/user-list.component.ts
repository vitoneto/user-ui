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
  successMessage: boolean = false;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().then(
      (response: any) => {
        this.userList = response
      }
    ).catch(
      (error: any) => console.log(error)
    );
  }

  saveUser(user: user) {
    this.userService.currentuser = user;
  }

  deleteUser(user: user, index: number) {
    this.userService.deleteUser(user).then(
      (Response: any) => {
        this.successMessage = true;
        setTimeout(() => {
          this.successMessage = false;
        }, 3000)
        this.userList.splice(index, 1)
      }
    ).catch(
      (error: any) => {
        console.log(error);
      }
    );
  }
}
