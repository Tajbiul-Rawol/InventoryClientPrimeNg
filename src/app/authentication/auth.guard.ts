import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/AuthService/auth-service.service";

@Injectable({providedIn:'root'})

export class AuthGuard  {
    constructor(private authService: AuthService, private router: Router) {}

    // canActivate(){
    //     if (this.authService.isLoggedIn()) {
    //         this.router.navigate(['/app-add-product']);
    //     }
    //     return !this.authService.isLoggedIn();
    // }
}
