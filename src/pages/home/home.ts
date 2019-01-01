import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LugarPage } from "../lugar/lugar";
import { PlaceAddPage } from "../place-add/place-add";
import { PlacesService } from "../../services/places.service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  places: any = [];
  constructor(
    public navCtrl: NavController,
    public placesServices: PlacesService
  ) {
    this.placesServices
      .getPlaces()
      .valueChanges()
      .subscribe(placesFB => {
        this.places = placesFB;
      });
  }

  // goToLugar(name) {
  //   // Navigate to "Lugar"
  //   this.navCtrl.push(LugarPage, {
  //     nombre: name
  //   });
  // }

  // Function to display place
  goToPlace(place) {
    this.navCtrl.push(LugarPage, {
      place: place
    });
  }

  // Function to delete a place
  deletePlace(place) {
    if (confirm("¿Realmente deseas eliminar el lugar?")) {
      return this.placesServices.deletePlace(place).then(() => {
        alert("Lugar eliminado");
      });
    }
  }

  // goToAddPlace() {
  //   // this.navCtrl.push(PlaceAddPage);
  // }
}
