import { Component, OnInit,HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
import {MatSnackBar,MatDialog, MatDialogConfig,MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { DownloadlinkComponent } from './downloadlink/downloadlink.component'

import { GeneralService } from './general.service';

const dark = 'dark-theme';
const light = 'default-theme';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @HostBinding('class') componentCssClass;
  title = 'pyspyng';
  events: string[] = [];
  opened: boolean;

  isdarktheme:boolean = false;
  
  users = ['noob','pro','yogurt','harta'];
  
  link:string = "Error getting link";

  constructor(public overlayContainer: OverlayContainer,private dialog: MatDialog, private generalapi:GeneralService,private snackBar: MatSnackBar)
  {
    this.overlayContainer.getContainerElement().classList.add(dark);
    this.overlayContainer.getContainerElement().classList.remove(light);
    this.componentCssClass = dark;
  }

  ngOnInit() 
  {
    this.getLink();
  }

  getLink()
  {
    this.generalapi.getDownloadLink().subscribe((data:any) =>
    {
      console.log(data);
      this.link = data.link;
      console.log("Got download link");
    },
    (err) => {console.log("Error contacting general service, server down? details: "+JSON.stringify(err));
    this.openSnackBar("Error getting general data(not critical)","hmm ok");});
  }

  toggleTheme()
  {
    console.log("lol k");
    alert("disabled feature");
    // this.isdarktheme = !this.isdarktheme;

    // if(this.isdarktheme)
    // {
    //   this.overlayContainer.getContainerElement().classList.add(dark);
    //   this.overlayContainer.getContainerElement().classList.remove(light);
    //   this.componentCssClass = dark;
    //   localStorage.setItem("theme", dark);
    // }
    // else
    // {
    //   this.overlayContainer.getContainerElement().classList.add(light);
    //   this.overlayContainer.getContainerElement().classList.remove(dark);
    //   this.componentCssClass = light;
    //   localStorage.setItem("theme", light);
    // }
  }

  help()
  {
    alert("no help");
  }

  logout()
  {
    console.log("ok");
  }

  downloadlink()
  {
    let dialogref = this.dialog.open(DownloadlinkComponent,
    {
      data: {link:this.link}
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
  