import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Category } from '../../entities/Category';
import { Product } from '../../entities/Product';
import { Store } from '../../entities/Store';
import { apiUrl } from "../../env";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http:HttpClient) { }
   
  baseUrl = apiUrl;
  Token: string;

  getCategoryData(){
     let url = this.baseUrl+"Category/showCategories";
     return this.http.get(url);
  }

  getProductData(){
     let url = this.baseUrl+"Product/showProduct";
     var options = {};
     this.Token = localStorage.getItem('token');
     if (this.Token) {
        const header = new HttpHeaders().set('Authorization', `Bearer ${this.Token}`); 
        options = {
           Headers: header,
        }
      }
    return this.http.get(url, options);
 }

 postProductData(product: Product){
    let url = this.baseUrl+"Product/post";
    return this.http.post(url,product);
 }

 postCategoryData(category: Category){
   let url = this.baseUrl+"Category/post";
   return this.http.post(url,category);
}

 getStoreData(){
  let url = this.baseUrl+"Store/getStore";
  return this.http.get(url);
}

 updateProductData(product: Product){
    let url = this.baseUrl+"Product/update";
    return this.http.put(url,product);
 }

updateCategoryData(category: Category){
   let url = this.baseUrl + "Category/put";
   return this.http.put(url,category);
}
}


