import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class StatusService {
  constructor(private db: AngularFireDatabase) {}

  // This method get all our status list from the server
  getAll() {
    return this.db.list("/status", {
      // here we are telling firebase to order the status by the 'name'
      query: {
        orderByChild: "name"
      }
    });
  }
}
