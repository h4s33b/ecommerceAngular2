import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item-service/item.service';
import { CartService } from '../shopping-cart/cart.service';
import {Iitem} from '../interfaces/item';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'product-detail-comp',
  templateUrl: "product-details.component.html"
})
export class ProductDetailComponent implements OnInit {

  productDetails: Iitem;
  featuredItems: Iitem[] = [];
  productQuantity: number = 1;
  constructor(private _ItemService: ItemService, public _CartService: CartService) {

  }

  ngOnInit() {
    this.productDetails = this._ItemService.getItemById("1089772");
    this._ItemService.getRecommendedItems().subscribe(v => { this.featuredItems.push(v)});
  }

  addItemToCart() {
    this._CartService.addCartItem(this.productDetails,this.productQuantity);
  }



}
