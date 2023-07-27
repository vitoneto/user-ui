import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() firstName = new FormControl('');
  @Input() lastName = new FormControl('');
  @Input() age = new FormControl('');
  @Input() mailAddress = new FormControl('');
  @Input() country = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
