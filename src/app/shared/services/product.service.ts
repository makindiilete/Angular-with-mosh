import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  // implementing the push to database method
  create(product) {
    return this.db.list('products').push(product);
  }

  // this method get our saved products
  getAll() {
    return this.db.list('products');
  }

  // this method retrieves the product with the id we click the 'Edit' on and displays it in the edit form
  get(id) {
    return this.db.object('products/' + id);
  }

  // this will delete object from our product list
  delete(id) {
    this.db.object('products/' + id).remove();
  }

  // updating a product
  update(product, id) {
    return this.db.object('products/' + id).update(product);
  }
}
