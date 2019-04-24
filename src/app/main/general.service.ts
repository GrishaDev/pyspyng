import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

// const host = 'https://grishadev-pyspy.glitch.me';
const host = '';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http:HttpClient) { }

  getDownloadLink()
  {
   return this.http.get(host+'/downloadlink');
  }
}
