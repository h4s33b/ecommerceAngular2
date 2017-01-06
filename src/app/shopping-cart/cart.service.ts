import { Injectable } from '@angular/core';
import {Iitem} from '../interfaces/item';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CartService {

    public items: Iitem[] = [];
    constructor() {

    }

    addCartItem(item: Iitem, quantity: number): void {
        var isNewItem: Boolean = true;
        this.items.forEach((x,index) => {
            if (x.productId && x.productId == item.productId) {
                this.items[index].quantity = Number(quantity) + Number(this.items[index].quantity);
                isNewItem = false;
            }
        })
        if (isNewItem) {
            item.quantity = quantity;
            this.items.push(item);
        }
    }

    getCartItems(): Observable<Iitem> {
        return Observable.from(this.items);
    }
}