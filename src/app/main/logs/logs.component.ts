import { Component, OnInit } from '@angular/core';
import { LogserviceService } from './logservice.service';
import {MatSnackBar,MatDialog, MatDialogConfig,MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DeletelogdialogComponent } from './deletelogdialog/deletelogdialog.component'

@Component({
  selector: 'logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
      animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ])
    ])
  ]
})
export class LogsComponent implements OnInit {

  logs = [];

  constructor(private logsapi:LogserviceService,private snackBar: MatSnackBar,private dialog: MatDialog) { }

  ngOnInit() 
  {
    // setTimeout(function() {this.openSnackBar("Hello there","ok");}.bind(this), 1000);
    this.updateLogs();
  }

  updateLogs()
  {
    this.logsapi.getLogs().subscribe((data:any) =>
    {
      // console.log(data);
      this.logs = data
      console.log(this.logs);
    },
    (err) => {console.log("Error contacting logs service, server down? details: "+JSON.stringify(err));
    this.openSnackBar("Error getting logs data, try again later","damn")});
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

  clearlogs()
  {
    let dialogref = this.dialog.open(DeletelogdialogComponent,
    {

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
