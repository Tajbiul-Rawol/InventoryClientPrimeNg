import { Component, OnInit } from '@angular/core';
import { UserLogin } from "../../entities/UserLogin";
import { AuthServiceService } from "../../services/AuthService/auth-service.service";
import { PrimeNGConfig } from 'primeng/api';
import {Message,MessageService} from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthServiceService, public primengConfig: PrimeNGConfig) { }

  userLoginData = new UserLogin();
  ngOnInit(): void {
  }
 
  submit(){
    if (this.userLoginData.UserName != null || this.userLoginData.UserPassword != null) {
       let postData = {
           userName: this.userLoginData.UserName,
           password: this.userLoginData.UserPassword
       }
       this.authService.postData(postData).subscribe(
         response=>{
                console.log(response.body.access_token);
         },
         error=>{
           console.log(error);
         }
       );

    }
  }
}
