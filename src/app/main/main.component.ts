import { Component, OnInit,HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';

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
  
  users = ['noob','pro','yogurt','harta'];
  
  constructor(public overlayContainer: OverlayContainer)
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
    console.log("nah");
  }

  help()
  {
    alert("lol");
  }

  logout()
  {
    console.log("ok");
  }
}
  