import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../shared/services/product.service";
import "rxjs/add/operator/take";
import { ShoppingCartService } from "../../../shared/services/shopping-cart.service";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent {
  product: any = {};
  // status = "In Stock";

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService,
    private toastr: ToastrService
  ) {
    let id = this.route.snapshot.paramMap.get("id");
    if (id)
      this.productService
        .get(id)
        .take(1)
        .subscribe(p => (this.product = p));
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.toastr.success("Success!")
  }
}
