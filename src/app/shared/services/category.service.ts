import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  // we renamed this method to 'getAll' for code consistency
  getAll() {
    return this.db.list('/categories', {
      // here we are telling firebase to order the category by the 'name'
      query: {
        orderByChild: 'name'
      }
    });
  }
}
