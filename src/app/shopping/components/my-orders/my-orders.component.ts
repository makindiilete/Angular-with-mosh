import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../shared/services/auth.service";
import { OrderService } from "../../../shared/services/order.service";

@Component({
  selector: "app-my-orders",
  templateUrl: "./my-orders.component.html",
  styleUrls: ["./my-orders.component.css"]
})
export class MyOrdersComponent implements OnInit {
  orders$;
  // orders;
  loading: boolean = true;
  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) {
    /*
    this.orders$ = authService.user$.switchMap(u =>
      orderService.getOrdersByUser(u.uid)
    );
    this.loading = false;
   */
  }

  ngOnInit() {
    let auth = this.authService.user$.switchMap(u => auth);
    this.orders$ = this.orderService.getOrdersByUser(auth.uid);
    this.orders$.subscribe(() => (this.loading = false));
  }
}
