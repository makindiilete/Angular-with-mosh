import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable()
export class OrderService {
  constructor(
    private db: AngularFireDatabase,
    private shoppingCartService: ShoppingCartService
  ) {}

  async placeOrder(order) {
    // this pushes our order to firebase
    const result = await this.db.list('orders').push(order);
    // here we clear the cart$ after storing the order
    this.shoppingCartService.clearCart();
    return result;
  }

  // this method is responsible for admin "Manage Orders" component
  getOrders() {
    return this.db.list('/orders');
  }

  // this method is responsible for users "My orders" component
  getOrdersByUser(userId: string) {
    return this.db.list('/orders', {
      query: {
        orderByChild: 'userId',
        equalTo: userId
      }
    });
  }
}
