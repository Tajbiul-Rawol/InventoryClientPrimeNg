import { Component, OnInit } from '@angular/core';
import { UserLogin } from "../../entities/UserLogin";
import { AuthService } from "../../services//AuthService/auth-service.service";
import { PrimeNGConfig } from 'primeng/api';
import {Message,MessageService} from 'primeng/api';
import { AuthGuard } from "../auth.guard";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService, public primengConfig: PrimeNGConfig, private authGuard: AuthGuard) { }

  userLoginData = new UserLogin();
  ngOnInit(): void {
  }
 
  submit(){
    if (this.userLoginData.UserName != null || this.userLoginData.UserPassword != null) {
       let userData = {
           userName: this.userLoginData.UserName,
           password: this.userLoginData.UserPassword
       }
       this.authService.login(userData).subscribe(
         response=>{
           let accessToken = response.body.access_token;
           let expiresIn = response.body.expires_in;
           this.authService.doLoginUser(userData.userName,accessToken);
         },
         error=>{
           console.log(error);
         }
       );

    }
  }
}
