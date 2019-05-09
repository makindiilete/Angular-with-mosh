import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./shopping/components/products/products.component";
import { SharedModule } from "./shared/shared.module";
import { AdminModule } from "./admin/admin.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { CoreModule } from "./core/core.module";
import { LoginComponent } from "./core/components/login/login.component";
import { FooterComponent } from "./core/components/footer/footer.component";
import { OutOfStockComponent } from "./core/components/out-of-stock/out-of-stock.component";

@NgModule({
  declarations: [AppComponent, FooterComponent, OutOfStockComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      /*      {
        path: "?:category=diary",
        component: OutOfStockComponent
      },*/
      {
        path: "",
        component: ProductsComponent
      },
      {
        path: "login",
        component: LoginComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
