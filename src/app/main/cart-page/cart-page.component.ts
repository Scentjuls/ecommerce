import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  quantity = 1;
  cartTables = [];
  existing: any;
  constructor() { }

  ngOnInit() {
 
  this.showCart()
  }

  // increment() {
  //   this.cartTable.quantity++;
  // }

  // decrement(){
  //   this.cartTable.quantity--;
  //   if (this.cartTable.quantity == 0){
  //     this.cartTable.quantity = 1;
  //   }
  // }

  showCart() {
    // let localStorageObject = JSON.parse(localStorage.getItem("exact product"));
    // this.existing = JSON.parse(localStorage.getItem('updated cart'))
    // this.existing.push(localStorageObject);
    // localStorage.setItem('updated cart', JSON.stringify(this.existing))

    //check for the id in the array of objects
    //if its there, update the object
    //if its not, add the object to the array
    
   let cartArray = JSON.parse(localStorage.getItem('updated cart'))
   let exactProduct = JSON.parse(localStorage.getItem('exact product'))
   console.log('exact id', exactProduct._id);
    cartArray.map(data => {
    console.log( 'cart id',data._id)
  });
    //  cartArray.map(data => {
    //   if(data._id === exactProduct._id ) {
    //     console.log('yayy')
    //   } else {
    //       console.log('nah')
    //   }
    // });
  //  if(this.cartTables) {
  //   return this.cartTables = JSON.parse(localStorage.getItem('updated cart'));
  //  } else {
  //    console.log('err')
  //  }
  }

  removeFromCart() {
    localStorage.removeItem('updated cart');
  }
}
