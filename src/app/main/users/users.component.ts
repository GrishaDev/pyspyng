import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {MatSnackBar,MatDialog, MatDialogConfig,MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { UserdialogComponent } from './userdialog/userdialog.component'

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
      animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {

  users = ['noob','pro','yogurt','harta'];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(user)
  {
    let dialogref = this.dialog.open(UserdialogComponent,
      {
        data: {user:user}
      });
  
      dialogref.afterClosed().subscribe(result =>
      {
        console.log(result);
        if(result)
        {
          console.log("you press ok, deleting logs");
        }
      });
  }
}
