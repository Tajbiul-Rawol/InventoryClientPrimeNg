import { Component, OnInit } from '@angular/core';
import { Product } from '../../../entities/Product'; 
import { PrimeNGConfig } from 'primeng/api';
import {Message,MessageService} from 'primeng/api';
import {ResourceService} from '../../../services/resource-services.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [MessageService]
})
export class AddProductComponent implements OnInit {

  flag = false;
  products : Product[];
  product = new Product();
  click = false;

  constructor(private messageService: MessageService, public ApiService: ResourceService, public primengConfig: PrimeNGConfig) { }
  
  ngOnInit(): void {
  }


 toggleClick(){
     this.click = true;
  }

  saveProductData(){
    if (this.product.ProductName == null ||
       this.product.ProductType == null ||
       this.product.Price == null) {
        this.showViaService("fields cannot be empty", "error"); 
        return;
    }
    this.ApiService.postProductData(this.product).subscribe(
     response=>{
       if (response) {
         let type = "success";
         this.showViaService(response,type);
         this.flag = true;
         this.clearField();
       }
     },
     error => {
       if (error) {
         let type = "error";
         this.showViaService(error,type);
       }
     }
   );
    
 }

 showViaService(message, type){
  this.messageService.add({severity: type, detail: message});
}

 clearField(){
  this.product.ID = null;
  this.product.Price = null;
  this.product.ProductDetail = "";
  this.product.ProductName = "";
  this.product.ProductType = "";
}

}
