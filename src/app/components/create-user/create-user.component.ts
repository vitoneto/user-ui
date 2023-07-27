import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { user } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  firstName = new FormControl('');
  lastName = new FormControl('');
  age = new FormControl('');
  mailAddress = new FormControl('');
  country = new FormControl('');

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  createUser() {
    const newUser: user = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      age: this.age.value,
      mailAddress: this.mailAddress.value,
      country: this.country.value
    }
    this.userService.createUser(newUser).then((Response) => {
      console.log('criado com sucesso');
      console.log(Response)
    }).catch((error) => {
      console.log('não criado com sucesso');
      console.log(error)
    });
  }
}
