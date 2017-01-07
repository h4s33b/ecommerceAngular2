import { Injectable } from '@angular/core';
import { Iitem } from '../interfaces/item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {

    public items: Iitem[] = [];
    constructor() {

    }

    addCartItem(item: Iitem, quantity: number): void {
        let isNewItem: Boolean = true;
        this.items.forEach((x, index) => {
            if (x.productId && x.productId == item.productId) {
                this.items[index].quantity = Number(quantity) + Number(this.items[index].quantity);
                isNewItem = false;
            }
        });
        if (isNewItem) {
            item.quantity = quantity;
            this.items.push(item);
        }
    }

    getCartItems(): Observable<Iitem> {
        return Observable.from(this.items);
    }

    deleteCartItem(item: Iitem): void {
        this.items.forEach((x, index) => {
            if (x.productId && x.productId == item.productId) {
                this.items.splice(index, 1);
            }
        });
    }

    incrementItemQuantity(item: Iitem, quantity: number): void {
        this.items.forEach((x, index) => {
            if (x.productId && x.productId == item.productId) {
                this.items[index].quantity = Number(quantity) + Number(this.items[index].quantity);
            }
        });
    }

    decrementItemQuantity(item: Iitem, quantity: number): void {
        this.items.forEach((x, index) => {
            if (x.productId && x.productId == item.productId) {
                this.items[index].quantity = Number(this.items[index].quantity) - Number(quantity);
            }
        });
    }

    getCartItemsCount(): number {
        let totalItemsCount = 0;
        if (this.items.length) {
            this.items.forEach((x, index) => {
                totalItemsCount += x.quantity;
            });
        }
        return totalItemsCount;
    }

    getCartItemsPrice(): number {
        let totalCartItemsPrice = 0;
        if (this.items.length) {
            this.items.forEach((x, index) => {
                totalCartItemsPrice += x.quantity * x.price;
            });
        }
        return totalCartItemsPrice;
    }

};
