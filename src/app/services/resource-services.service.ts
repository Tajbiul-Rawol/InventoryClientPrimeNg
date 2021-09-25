import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Category } from '../entities/Category';
import { Product } from '../entities/Product';
import { Store } from '../entities/Store';

@Injectable({
  providedIn: 'root'
})
export class ResourceServicesService {

  constructor(private http:HttpClient) { }
   
  baseUrl = "http://localhost:21435/api/";
  
  getCategoryData(){
     let url = this.baseUrl+"Category";
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

 getStoreData(){
  let url = this.baseUrl+"Store/getStore";
  return this.http.get(url);
}

}
