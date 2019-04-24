import { Component, OnInit,AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  logs = [];
  logs2 = [];
  isloading:boolean = false;

  updateInterval:number = 60000;

  constructor(private logsapi:LogserviceService,private snackBar: MatSnackBar,private dialog: MatDialog) { }

  ngOnInit() 
  {
    // setTimeout(function() {this.openSnackBar("Hello there","ok");}.bind(this), 1000);
    // for(let i =0;i < 100;i++)
    // {
    //   this.logs2.push("wowowowoow: 32949234 : wawawaw LO-o ");
    // }

    this.updateLogs();
    
    setTimeout(() => {
      this.scrollToBottom();
    });

    setInterval(()=>{ this.updateLogs(); }, this.updateInterval);
  }

  // ngAfterViewChecked() {        
  //   this.scrollToBottom();        
  // } 
  
  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

  updateLogs()
  {
    console.log("updating logs");
    this.isloading = true;

    this.logsapi.getLogs().subscribe((data:any) =>
    {
      this.isloading = false;
      // console.log(data);
      this.logs = data
      console.log("Got logs data");
      // this.scrollToBottom();
    },
    (err) => {console.log("Error contacting logs service, server down? details: "+JSON.stringify(err));
    this.openSnackBar("Error getting logs data, try again later","damn");
    this.isloading = false;});
  }

  rmLogs()
  {
    // this.scrollToBottom();  
    this.logsapi.rmLogs().subscribe((data:any) =>
    {
      // console.log(data);
      if(data.status)
      {
        this.openSnackBar("Cleared logs!","ok");
      }
      else
      {
        this.openSnackBar("Error clearing logs, try again later","damn");
      }
    },
    (err) => {console.log("Error contacting logs service, server down? details: "+JSON.stringify(err));
    this.openSnackBar("Error clearing logs, try again later","damn");});
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
        this.rmLogs();
        this.updateLogs();
      }
    });
  }

}
