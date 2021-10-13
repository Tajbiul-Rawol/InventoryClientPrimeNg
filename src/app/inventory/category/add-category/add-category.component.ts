import { Component, OnInit } from '@angular/core';
import {Message,MessageService} from 'primeng/api';
import {ResourceService} from '../../../services/resourceService/resource-services.service';
import { Category } from '../../../entities/Category'; 
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  providers:[MessageService]
})
export class AddCategoryComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;
  category = new Category();
  click = false;
  flag = false;
  displayModal: boolean;
  constructor(private messageService: MessageService, public ApiService: ResourceService, public primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
     this.loadCategoryData();
  }
  
  showModalDialog(event){
    this.displayModal = true;
    
  }


  onRowSelect(event){
    console.log(event.data);
    this.selectedCategory = event.data;
    this.category.ID = event.data.ID;
    this.category.Name = event.data.Name;
    this.category.CategoryType = event.data.CategoryType;
  }

  
  showViaService(message, type){
    this.messageService.add({severity: type, detail: message});
  }
  updateData(){
    this.category.ID = parseInt((<HTMLInputElement>document.getElementById('ID')).value);
    this.category.Name = (<HTMLInputElement>document.getElementById('categoryName')).value;
    this.category.CategoryType = (<HTMLInputElement>document.getElementById('categoryType')).value;
     if (this.category.Name == null || this.category.CategoryType == null) {
        this.showViaService("Fields cannot be empty!", "error");
     }
     else{
         this.updateCategoryData();
     }
    this.displayModal = false;
  }

  findIndexByID(ID: number, ObjArray: any[]){
     let index = -1;
    for (let i = 0; i < ObjArray.length; i++) {
       if (ObjArray[i].ID == ID) {
         index = i;
         break;
       }
    }
    return index;
  }

  clearField(){
    this.category.ID = null;
    this.category.Name = null;
    this.category.CategoryType = null;
  }

  saveCategoryData(){
     if (this.category.Name == null ||
         this.category.CategoryType == null) {
           this.showViaService("fields cannot be empty", "error"); 
           return;
      }
      else{
        this.ApiService.postCategoryData(this.category).subscribe(
          response=>{
             if (response) {
                let type = "success";
                this.showViaService(response,type);
                this.flag = true;
                this.clearField();
                this.loadCategoryData();
              }
            },
              error => {
                if (error) {
                  let type = "error";
                  this.showViaService(error,type);
                }
              }
           );
           return;
      }
      
  }

  toggleClick(){
    this.click = true;
 }


  onRowUnselect(event){
    this.selectedCategory = event.data;
    this.category.ID = event.data.ID;
    this.category.Name = event.data.Name;
    this.category.CategoryType = event.data.CategoryType;
  }


  loadCategoryData(){
    this.ApiService.getCategoryData().subscribe(data=>{
      this.categories = Object.values(data);
   });
  }


  updateCategoryData(){
    this.ApiService.updateCategoryData(this.category).subscribe(
      response=>{
           if (response) {
            let type = "success";
            this.showViaService(response,type);
            this.flag = true;
            this.clearField();
            this.loadCategoryData();
           }  
       },
       error=>{
        if (error) {
          let type = "error";
          this.showViaService(error,type);
        }
       }
    );
    return;
  }
}
