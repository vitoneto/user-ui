import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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

}
