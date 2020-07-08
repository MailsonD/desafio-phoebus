import { CartRoutingModule } from './cart-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';



@NgModule({
  declarations: [ CartComponent, CartItemsComponent ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
