import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { userModel } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
    this.userDataLists = [];
    this.http.get<any>("http://localhost:3000/userDataLists").subscribe(data => {
        this.userDataLists.push(data);
        // console.log(this.userDataLists.length);
        // console.log(this.userDataLists);
    })
   }

  private url: string = "http://localhost:3000/userDataLists";

  userModel: userModel;
  userDataLists: Array<{}>;
  token: Number = 0;
  tokenDetails: string;
  userLists: Array<{}>;


  setToken(){
    this.token = new Date().getTime();
    localStorage.setItem('token', JSON.stringify(this.token));
  }

  validateUserToken(){
    this.tokenDetails = localStorage.getItem('token');
    return this.tokenDetails != null;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  validateUser(user): boolean{    

    this.userLists = <Array<{}>>this.userDataLists[0];
    console.log(this.userLists.length);
    
    for(let i=0; i< this.userLists.length; i++){
      
      // console.log(this.userLists);
      // console.log(this.userDataLists.length);
      
      if(user.email === this.userLists[i]['email'] && user.password === this.userLists[i]['password']){
        return true;
      }
    }
    return false;
  }

  logOut(){
    localStorage.clear();
  }

  registerUser(user): void {
    
    this.http.post<any>("http://localhost:3000/userDataLists", user, this.httpOptions).subscribe(data => {
      this.userDataLists.push(data);
      // console.log(this.userDataLists);
      // console.log(data);
    })
    console.warn("hi");
  }

}
