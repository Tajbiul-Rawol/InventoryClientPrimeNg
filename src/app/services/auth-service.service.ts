import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  postData(data): any{
    return this.http.post('http://localhost:21435/token',
    "userName=" + encodeURIComponent(data.userName) +
    "&password=" + encodeURIComponent(data.password) +
    "&grant_type=password",
    { observe: 'response', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
  }

}
