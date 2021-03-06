import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductQuantityComponent } from "./components/product-quantity/product-quantity.component";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth-guard.service";
import { UserService } from "./services/user.service";
import { CategoryService } from "./services/category.service";
import { ProductService } from "./services/product.service";
import { OrderService } from "./services/order.service";
import { ShoppingCartService } from "./services/shopping-cart.service";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DataTableModule } from "angular-4-data-table-bootstrap-4";
import { StatusService } from "./services/status.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    DataTableModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  declarations: [ProductCardComponent, ProductQuantityComponent],
  exports: [
    CommonModule,
    DataTableModule,
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    OrderService,
    ShoppingCartService,
    StatusService
  ]
})
export class SharedModule {}
