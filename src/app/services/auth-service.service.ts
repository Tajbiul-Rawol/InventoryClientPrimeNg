import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  postData(data): any{
    const body = new HttpParams()
    .set('grant_type', data.grant_type)
    .set('username',data.userName)
    .set('password', data.password)
    return this.http.post('http://localhost:64793/token', body.toString(), {observe: 'response',    
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },    
    });
  }

}
