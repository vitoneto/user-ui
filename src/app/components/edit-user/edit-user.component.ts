import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { user } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {
  currentUser: any;
  successMessage: boolean = false;

  firstName = new FormControl('');
  lastName = new FormControl('');
  age = new FormControl('');
  mailAddress = new FormControl('');
  country = new FormControl('');

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    if(this.userService.currentuser) {
      this.currentUser = this.userService.currentuser
      this.firstName.setValue(this.currentUser.firstName);
      this.lastName.setValue(this.currentUser.lastName);
      this.age.setValue(this.currentUser.age);
      this.mailAddress.setValue(this.currentUser.mailAddress);
      this.country.setValue(this.currentUser.country);
    }
  }

  changeUserData() {
    const upToDatedUser: user = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      age: this.age.value,
      mailAddress: this.mailAddress.value,
      country: this.country.value
    }
    this.userService.updateUser(upToDatedUser).then((Response: any) => {
      this.successMessage = true;
      setTimeout(() => {
        this.successMessage = false;
      }, 3000)
    }).catch((error: any) => {
      console.log(error)
    });
  }

}
