import { HttpClientModule } from '@angular/common/http'; 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatIconModule,MatToolbarModule,MatMenuModule,MatSidenavModule,MatTooltipModule,MatSnackBarModule,MatDialogModule,
MatFormFieldModule,MatProgressSpinnerModule} from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './main/toolbar/toolbar.component';
import { LogsComponent } from './main/logs/logs.component';
import { UsersComponent } from './main/users/users.component';
import { TitleimgComponent } from './main/titleimg/titleimg.component';

import { LogserviceService } from './main/logs/logservice.service'
import { DeletelogdialogComponent } from './main/logs/deletelogdialog/deletelogdialog.component';
import { UserdialogComponent } from './main/users/userdialog/userdialog.component';
import { DownloadlinkComponent } from './main/downloadlink/downloadlink.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolbarComponent,
    LogsComponent,
    UsersComponent,
    TitleimgComponent,
    DeletelogdialogComponent,
    UserdialogComponent,
    DownloadlinkComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    DeletelogdialogComponent,
    UserdialogComponent,
    DownloadlinkComponent
  ],
  providers: [LogserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
