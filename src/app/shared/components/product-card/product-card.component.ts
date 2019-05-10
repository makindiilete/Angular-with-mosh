import { ShoppingCart } from "../../models/shopping-cart";
import { ShoppingCartService } from "../../services/shopping-cart.service";
import { Product } from "../../models/product";
import { Component, OnInit, Input } from "@angular/core";
import { StatusService } from "../../services/status.service";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent {
  @Input("product") product: Product;
  @Input("show-actions") showActions = true;
  @Input("shopping-cart") shoppingCart: ShoppingCart;
  status$;

  constructor(
    private cartService: ShoppingCartService,
    private statusService: StatusService
  ) {
    this.status$ = statusService.getAll();
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
