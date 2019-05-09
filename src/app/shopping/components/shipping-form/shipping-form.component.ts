import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";
import { Order } from "../../../shared/models/order";
import { OrderService } from "../../../shared/services/order.service";
import { ShoppingCart } from "../../../shared/models/shopping-cart";
import { AuthService } from "../../../shared/services/auth.service";
import { Shipping } from "../../../shared/models/shipping";

@Component({
  selector: "shipping-form",
  templateUrl: "./shipping-form.component.html",
  styleUrls: ["./shipping-form.component.css"]
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input("cart") cart: ShoppingCart;
  shipping: any = {};
  userId: string;
  userSubscription: Subscription;
  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(
      user => (this.userId = user.uid)
    );
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);
    // here we redirect the user to order-success page
    this.router.navigate(["/order-success", result.key]);
  }
}
