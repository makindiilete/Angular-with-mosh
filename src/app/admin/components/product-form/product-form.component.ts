import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import "rxjs/add/operator/take"; // import this for the shortcut to unsubscribe : - With the 'take', we can take only one item from our observable and the observable will be complete, we wont need to unsubscribe
import { ProductService } from "../../../shared/services/product.service";
import { CategoryService } from "../../../shared/services/category.service";
import { ProductForm } from "../../../shared/models/product-form";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent {
  categories$;
  product = new ProductForm("", "", "", "");
  id;

  // inject the angular router
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categories$ = categoryService.getAll();

    //  here we want to read the id route parameter
    this.id = this.route.snapshot.paramMap.get("id");
    // here we are subscribing to the observable to get the product with the given id
    // .take(1) - number of items we want to take
    if (this.id)
      this.productService
        .get(this.id)
        .take(1)
        .subscribe(p => (this.product = p));
  }

  save(product) {
    if (this.id) this.productService.update(product, this.id);
    else this.productService.create(product);
    this.router.navigate(["/admin/products"]);
  }

  delete() {
    //users gets confirmation box if they want to delete the product, if yes, product gets deleted, if they click on cancel, they remain on the page
    if (confirm("Are you sure you want to delete this product?")) {
      this.productService.delete(this.id);
      this.router.navigate(["/admin/products"]);
    }
  }
}
