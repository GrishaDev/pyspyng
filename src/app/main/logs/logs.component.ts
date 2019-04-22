import { Component, OnInit } from '@angular/core';
import { LogserviceService } from './logservice.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs = [];

  constructor(private logsapi:LogserviceService,private snackBar: MatSnackBar) { }

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

}
