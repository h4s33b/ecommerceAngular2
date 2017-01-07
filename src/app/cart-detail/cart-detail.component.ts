import { Component,OnInit } from '@angular/core';
import { CartService } from '../shopping-cart/cart.service';
import { Iitem } from '../interfaces/item';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html'
})
export class CartDetailComponent implements OnInit{ 
    
    cartItems : Iitem[] = [];
    
    constructor(private _CartService : CartService){

    }

    ngOnInit(){
        this._CartService.getCartItems().subscribe(v => { this.cartItems.push(v) });
        console.log(this.cartItems);
    }


}