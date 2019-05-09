import { Component, Input } from '@angular/core';
import {Product} from '../../models/product';
import {ShoppingCartService} from '../../services/shopping-cart.service';


@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService) {}

  // we call the addToCart method inside our cartService to add a product to cart
  addToCart() {
    this.cartService.addToCart(this.product);
  }

  // this method removes a product from cart
  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }
}
