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
  selectedProduct: Product;
  product = new Product();
  displayModal: boolean = false;
  click = false;

  constructor(private messageService: MessageService, public ApiService: ResourceService, public primengConfig: PrimeNGConfig) { }
  
  ngOnInit(): void {
    this.loadProductData();
  }

  showModalDialog(event){
    this.displayModal = true;
    
  }

  onRowSelect(event){
    this.selectedProduct = event.data;
    this.product.ID = event.data.ID;
    this.product.ProductName = event.data.ProductName;
    this.product.ProductType = event.data.ProductType;
    this.product.ProductDetail = event.data.ProductDetail;
    this.product.Price = event.data.Price;
    
  }


  updateData(){
    this.product.ID = parseInt((<HTMLInputElement>document.getElementById('ID')).value);
    this.product.ProductName = (<HTMLInputElement>document.getElementById('productName')).value;
    this.product.Price = parseInt((<HTMLInputElement>document.getElementById('price')).value);
     if (this.product.ProductName== null || this.product.Price == null) {
        this.showViaService("Fields cannot be empty!", "error");
     }
     else{
         this.updateProduct(this.product);
     }
    this.displayModal = false;
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
    if (this.selectedProduct) {
       this.updateProduct(this.product);
       return;
    }
    this.ApiService.postProductData(this.product).subscribe(
     response=>{
       if (response) {
         let type = "success";
         this.showViaService(response,type);
         this.flag = true;
         this.clearField();
         this.loadProductData();
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

updateProduct(product: Product){
  this.ApiService.updateProductData(product).subscribe(
    response => {
      let type = "success";
      this.showViaService(response,type);
      this.flag = true;
      this.loadProductData();
      return;
    },
    error => {
     if (error) {
       let type = "error";
       this.showViaService(error,type);
     }
    }
  );
}

 clearField(){
  this.product.ID = null;
  this.product.Price = null;
  this.product.ProductDetail = "";
  this.product.ProductName = "";
  this.product.ProductType = "";
  this.selectedProduct = null;
}

loadProductData(){
  this.ApiService.getProductData().subscribe(data=>{
      this.products = Object.values(data);
  });
}

onRowUnselect(event){
  this.selectedProduct = event.data;
  this.product.ID = event.data.ID;
  this.product.ProductName = event.data.ProductName;
  this.product.ProductType = event.data.ProductType;
  this.product.ProductDetail = event.data.ProductDetail;
  this.product.Price = event.data.Price;
}

}
