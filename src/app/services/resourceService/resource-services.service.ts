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

  authorizeHeader(){
   var options = {};
   this.Token = localStorage.getItem('token');
   if (this.Token) {
      const header = new HttpHeaders().set('Authorization', `Bearer ${this.Token}`); 
      options = {
         headers: header,
      }
    }
    return options;
  }

  getCategoryData(){
     let url = this.baseUrl+"Category/showCategories";
     const headers = this.authorizeHeader();
     return this.http.get(url);
  }

  getProductData(){
     let url = this.baseUrl+"Product/showProduct";
     const headers = this.authorizeHeader();
     return this.http.get(url, headers);
 }

 postProductData(product: Product){
    let url = this.baseUrl+"Product/post";
    const headers = this.authorizeHeader();
    return this.http.post(url,product,headers);
 }

 postCategoryData(category: Category){
   let url = this.baseUrl+"Category/post";
   const headers = this.authorizeHeader();
   return this.http.post(url,category);
}

 getStoreData(){
  let url = this.baseUrl+"Store/getStore";
  const headers = this.authorizeHeader();
  return this.http.get(url);
}

 updateProductData(product: Product){
    let url = this.baseUrl+"Product/update";
    const headers = this.authorizeHeader();
    return this.http.put(url,product,headers);
 }

updateCategoryData(category: Category){
   let url = this.baseUrl + "Category/put";
   const headers = this.authorizeHeader();
   return this.http.put(url,category);
 }
}


