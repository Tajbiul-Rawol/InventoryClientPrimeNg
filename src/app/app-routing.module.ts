import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { AddCategoryComponent } from './inventory/category/add-category/add-category.component';
import { AddProductComponent } from './inventory/product/add-product/add-product.component';
import { DashboardComponent } from "././layout/dashboard/dashboard.component";
import { AddStoreComponent } from './inventory/store/add-store/add-store.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'app-dashboard',
    component: DashboardComponent
  },
  {
    path: 'app-add-product',
    component: AddProductComponent
  },
  {
    path: 'app-add-category',
    component: AddCategoryComponent
  },
  {
    path: 'app-add-store',
    component: AddStoreComponent
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
