import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Category } from '../../entities/Category';
import { Product } from '../../entities/Product';
import { Store } from '../../entities/Store';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http:HttpClient) { }
   
  baseUrl = "http://localhost:21435/api/";
  
  getCategoryData(){
     let url = this.baseUrl+"Category/showCategories";
     return this.http.get(url);
  }

  getProductData(){
    let url = this.baseUrl+"Product/showProduct";
    return this.http.get(url);
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