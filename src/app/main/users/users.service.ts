import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

// const host = 'https://grishadev-pyspy.glitch.me';
const host = '';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers()
  {
   return this.http.get(host+'/users');
  }

  rmUser(user)
  {
    // console.log("sakdsakdj " +user);
    return this.http.post(host+'/removeuser',{user:user});
  }
}
