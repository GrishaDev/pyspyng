import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

// const host = 'https://grishadev-pyspy.glitch.me'
const host = '';

@Injectable({
  providedIn: 'root'
})
export class LogserviceService {

  constructor(private http:HttpClient) 
  {

  }

  getLogs()
  {
   return this.http.get(host+'/getlogs');
  }

  rmLogs()
  {
   return this.http.get(host+'/clearlogs');
  }

  
}
