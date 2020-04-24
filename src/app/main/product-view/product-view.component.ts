import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

   res: any;
   exactProduct = {}
   existing: any;
  sizes = [
    {
      name: "Small",
      actualSize: "small"
    },
    {
      name: "Medium",
      actualSize: "medium"
    },
    {
      name: "Large",
      actualSize: "large"
    },
    {
      name: "Extra Large",
      actualSize: "extraLarge"
    }
  ];
  quantity = 1;
  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): any {
    this.getExactProduct();
  }

  increment() {
    this.quantity++;
  }

  decrement(){
    this.quantity--;
    if (this.quantity == 0){
      this.quantity = 1;
    }
  }

  updateCart(form) {
    let exactQuantity = JSON.stringify(this.quantity);
    let newForm = _.merge(form.value, { quantity: exactQuantity})
    let localStorageObject = JSON.parse(localStorage.getItem("exact product"));
    let updatedForm = _.merge(newForm, localStorageObject);
    let updatedFormArray = [updatedForm]
    localStorage.setItem('updated cart', JSON.stringify(updatedFormArray));
    this.toastr.success('Added Successfully to cart', 'Added to Cart')
    console.log('exact prod from view', this.getExactProduct())
    this.router.navigate(['/cart']);
    
  } 

  getExactProduct():any {
    const id = this.route.snapshot.paramMap.get('_id'); //get the exact id of the perticular object i want
    let allProducts = localStorage.getItem('all-products'); //get all products from localstorage
    let arrayProducts = JSON.parse(allProducts); // change from string of JSON to JSON Object
    
    // for (let index = 0; index < arrayProducts.length; index++) {
    //   if(arrayProducts[index]._id == id) {
    //     console.log('object i want', arrayProducts[index])
    //     return  arrayProducts[index] = this.exactProduct;
    //   }
    // }
  arrayProducts.map((data) => {
    if(data._id === id) {
      localStorage.setItem('exact product', JSON.stringify(this.exactProduct = data))
     return this.exactProduct = data;
    }
  });
  }

 
}
