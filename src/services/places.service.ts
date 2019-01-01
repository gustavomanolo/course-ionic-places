import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable()
export class PlacesService {
  constructor(public afDB: AngularFireDatabase) {}

  public getPlaces() {
    return this.afDB.list("/lugares");
  }

  public getPlace(id) {
    return this.afDB.object("/lugares/" + id);
  }

  public createPlace(place) {
    return this.afDB.database.ref("/lugares/" + place.id).set(place);
  }

  public editPlace(place) {
    return this.afDB.database.ref("/lugares/" + place.id).set(place);
  }

  public deletePlace(place) {
    return this.afDB.database.ref("/lugares/" + place.id).remove();
  }
}
