import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = ['noob','pro','yogurt','harta'];
  constructor() { }

  ngOnInit() {
  }

}
