import { ProductsService } from '../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private SpinnerService: NgxSpinnerService
  ) { }

  products = [];
  ngOnInit() {
  this.showProducts();
  }

showProducts(){
  this.SpinnerService.show();  
  this.productsService.getProducts()
  .subscribe(
    res => {
      console.log('res', res)
      this.products = res;
      localStorage.setItem('all-products', JSON.stringify(res))
      this.SpinnerService.hide(); 
    },
     err => console.log('err', err)
     )
}
}
