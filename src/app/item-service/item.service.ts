import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Iitem} from '../interfaces/item';

@Injectable()
export class ItemService {

  public items: Iitem[];
  public featuredItems : Iitem[];


  constructor() {
    this.items = [{
      name: "Anne Klein Sleeveless Colorblock Scuba",
      productId: "1089772",
      price: 59,
      Condition: "New",
      Brand: "E-SHOPPER",
      Availability: "In Stock",
      imagesUrl: "images/product-details/1.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }];

    this.featuredItems = [{
      name: "Anne Klein Sleeveless Colorblock Scuba",
      productId: "1089872",
      price: 60,
      Condition: "New",
      Brand: "E-SHOPPER",
      Availability: "In Stock",
      imagesUrl: "images/home/recommend1.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },{
      name: "Anne Klein Sleeveless Colorblock Scuba",
      productId: "1089972",
      price: 59,
      Condition: "New",
      Brand: "E-SHOPPER",
      Availability: "In Stock",
      imagesUrl: "images/home/recommend2.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },{
      name: "Anne Klein Sleeveless Colorblock Scuba",
      productId: "1089072",
      price: 34,
      Condition: "New",
      Brand: "E-SHOPPER",
      Availability: "In Stock",
      imagesUrl: "images/home/recommend3.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }];
  }

  public getItemById(itemId:string):Iitem{
    var returnedItem:Iitem;
    this.items.forEach(x=>{
      if(x.productId && x.productId==itemId){
        returnedItem = x;
      }
    })
    return returnedItem;
  }

  public getRecommendedItems():Observable<Iitem>{
    return Observable.from(this.featuredItems);
  }

}
