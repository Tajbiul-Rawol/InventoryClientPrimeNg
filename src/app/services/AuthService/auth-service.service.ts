import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";
import { tokenUrl } from "../../env";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient) { }
  loggedInUser: string;

  login(data): any{
    let response = this.http.post(tokenUrl,
    "userName=" + encodeURIComponent(data.userName) +
    "&password=" + encodeURIComponent(data.password) +
    "&grant_type=password",
    { observe: 'response', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
    return response;
  }

  doLoginUser(userName:string, token: string){
     this.loggedInUser = userName;
     this.storeToken(token);
     this.isLoggedIn();
  }

  storeToken(token: string){
     let key = 'token'; 
     localStorage.setItem(key, token);
  }

  isLoggedIn(): Boolean{
     if (this.loggedInUser) {
        return true;
     }
     return false;
  }
}
