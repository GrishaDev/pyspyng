import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {MatSnackBar,MatDialog, MatDialogConfig,MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { UserdialogComponent } from './userdialog/userdialog.component'
import { UsersService } from './users.service';

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

  users = [];

  constructor(private snackBar: MatSnackBar,private dialog: MatDialog,private usersapi:UsersService) { }

  ngOnInit() 
  {
    this.getUsers();
  }

  getUsers()
  {
    this.usersapi.getUsers().subscribe((data:any) =>
    {
      console.log(data);
      this.users = data.users;
      console.log("Got users array");
    },
    (err) => {console.log("Error contacting users service, server down? details: "+JSON.stringify(err));
    this.openSnackBar("Error getting users data, try again later","damn");});
  }

  rmUser(user)
  {
    this.usersapi.rmUser(user).subscribe((data:any) =>
    {
      console.log(data);
      // this.users = data.users;
      if(data.status)
      {
        this.openSnackBar(user+" was successfuly removed","ok");
      }
      else
      {
        this.openSnackBar("Error removing user, try again later","damn");
      }
    },
    (err) => {console.log("Error contacting users service, server down? details: "+JSON.stringify(err));
    this.openSnackBar("Error removing user, try again later","damn");});
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
          console.log("you press ok, deleting user "+result);
          this.rmUser(result);
          setTimeout(function() {this.getUsers();}.bind(this), 500);
          
        }
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
