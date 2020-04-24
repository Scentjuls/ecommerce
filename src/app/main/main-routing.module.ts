import { AllProductsComponent } from './all-products/all-products.component';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { ProductViewComponent } from './product-view/product-view.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'landing-page', component: AllProductsComponent, canActivate: [AuthGuard] },
    { path: 'product-view/:_id', component: ProductViewComponent },
    { path: 'cart', component: CartPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule  { }
