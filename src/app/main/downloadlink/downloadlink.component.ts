import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-downloadlink',
  templateUrl: './downloadlink.component.html',
  styleUrls: ['./downloadlink.component.css']
})
export class DownloadlinkComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  downloadlink:string = "https://somefakelink.com/wawdownload"

  ngOnInit() {
  }

  saveclip()
  {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.downloadlink;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.snackBar.open("Saved to clipboard!", "k", {
      duration: 4000,
    });
  }

}
