import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { DataTableResource } from "angular-4-data-table";
import { ProductService } from "../../../shared/services/product.service";
import { Product } from "../../../shared/models/product";

@Component({
  selector: "app-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.css"]
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>; // for our data table
  items: Product[] = [];
  itemCount: number;
  loading: boolean;

  constructor(private productService: ProductService) {
    // console.log("Loading");
    this.loading = true;
    this.subscription = this.productService.getAll().subscribe(products => {
      this.products = products;
      this.initializeTable(products);
    });
  }

  private initializeTable(products: Product[]) {
    // console.log("loading");
    // we want to pass the result of our products to the table resource
    this.tableResource = new DataTableResource(products);
    // we use this to get all the records for the current page based on the current parameter
    // offset : 0 - indicates we wanna display records in page 1
    this.tableResource
      .query({ offset: 0 })
      // items - we ref ds in our template
      .then(items => (this.items = items));
    // count returns the total number of products we receive from server
    this.tableResource
      .count()
      // we ref ds in our template
      .then(count => ((this.itemCount = count), (this.loading = false)));
    // console.log("Loaded");
  }

  // our reloadItems method
  reloadItems(params) {
    // if we dont have any resource available yet from server, we dont do anything
    if (!this.tableResource) return;
    this.tableResource.query(params).then(items => (this.items = items));
  }

  filter(query: string) {
    const filteredProducts = query
      ? this.products.filter(p =>
          p.title.toLowerCase().includes(query.toLowerCase())
        )
      : this.products;
    // we call the initializeTable and give it our filtered products
    this.initializeTable(filteredProducts);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
