import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private router: Router) { }
  ngOnInit(): void {
   
  }

  logout(){
    console.log('works');
    this.router.navigate(['app-add-category']);
    localStorage.removeItem('token');
  }

}
