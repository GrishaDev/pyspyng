import { Component, OnInit,HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
import {MatSnackBar,MatDialog, MatDialogConfig,MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { DownloadlinkComponent } from './downloadlink/downloadlink.component'
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
  
  constructor(public overlayContainer: OverlayContainer,private dialog: MatDialog)
  {
    this.overlayContainer.getContainerElement().classList.add(dark);
    this.overlayContainer.getContainerElement().classList.remove(light);
    this.componentCssClass = dark;
  }

  ngOnInit() 
  {
    
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
    let dialogref = this.dialog.open(DownloadlinkComponent)
  }
}
  