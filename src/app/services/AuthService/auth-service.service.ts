import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loggedInUser: string;
  login(data): any{
    let response = this.http.post('http://localhost:21435/token',
    "userName=" + encodeURIComponent(data.userName) +
    "&password=" + encodeURIComponent(data.password) +
    "&grant_type=password",
    { observe: 'response', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
    return response;
  }

  doLoginUser(userName:string, token: string, loggedIn: boolean){
     this.loggedInUser = userName;
     this.storeToken(token);
     this.isLoggedIn(loggedIn);
  }

  storeToken(token: string){
     let key = 'token'; 
     localStorage.setItem(key, token);
  }

  isLoggedIn(loggedIn: boolean): Boolean{
     if (loggedIn) {
        return loggedIn;
     }
     return !loggedIn;
  }
}
