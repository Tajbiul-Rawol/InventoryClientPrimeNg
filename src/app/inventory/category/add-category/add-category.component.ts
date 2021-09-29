import { Component, OnInit } from '@angular/core';
import {Message,MessageService} from 'primeng/api';
import {ResourceService} from '../../../services/resource-services.service';
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
    this.selectedCategory = event.data;
    this.category.ID = event.data.ID;
    this.category.Name = event.data.Name;
    this.category.CategoryType = event.data.CategoryType;
  }

  
  showViaService(message, type){
    this.messageService.add({severity: type, detail: message});
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
      if (this.saveCategoryData) {
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
}
