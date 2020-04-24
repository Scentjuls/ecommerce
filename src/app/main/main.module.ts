import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from './main.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { NgxSpinnerModule } from "ngx-spinner";  
import { ServicesModule } from '../services/services.module';
import { ProductViewComponent } from './product-view/product-view.component';
import { FormsModule } from '@angular/forms';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [MainComponent, AllProductsComponent, LoadingScreenComponent, ProductViewComponent, CartPageComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgxSpinnerModule,
    ServicesModule,
    FormsModule
  ]
})
export class MainModule { }
