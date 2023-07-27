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

  deleteUser(user: user, index: number) {
    console.log('deletando user');
    console.log(user.id);
    this.userService.deleteUser(user).then(
      (Response: any) => {
        this.successMessage = true;
        setTimeout(() => {
          this.successMessage = false;
        }, 3000)
        console.log('to delete user');
        console.log(user)
        this.userList.splice(index, 1)
        console.log(this.userList)
      }
    ).catch(
      (error: any) => {
        console.log('delet user error');
        console.log(error);
      }
    );
  }

}
