import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SidebarModule} from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {AddProductComponent} from './inventory/product/add-product/add-product.component';
import { AddCategoryComponent } from "./inventory/category/add-category/add-category.component";
import {TableModule} from 'primeng/table';
import { ToastModule } from "primeng/toast";
import {DialogModule} from 'primeng/dialog';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { AuthService } from "./services/AuthService/auth-service.service";
import { LoginComponent } from './authentication/login/login.component';
import {PasswordModule} from 'primeng/password';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AddProductComponent,
    AddCategoryComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    SidebarModule,
    PanelMenuModule,
    MenubarModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
    TableModule,
    ToastModule,
    DialogModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    PasswordModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
