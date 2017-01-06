import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../item-service/item.service';
import { CartService } from '../shopping-cart/cart.service';
import { Iitem } from '../interfaces/item';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-detail-comp',
  templateUrl: "product-details.component.html"
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  productDetails: Iitem;
  featuredItems: Iitem[] = [];
  productQuantity: number = 1;
  constructor(private _ItemService: ItemService, public _CartService: CartService,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
    this.productDetails = this._ItemService.getItemById(this.id+"");
    this._ItemService.getRecommendedItems().subscribe(v => { this.featuredItems.push(v) });
  }

  addItemToCart() {
    this._CartService.addCartItem(this.productDetails, this.productQuantity);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
