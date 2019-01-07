import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LugarPage } from "../lugar/lugar";
import { PlaceAddPage } from "../place-add/place-add";
import { PlacesService } from "../../services/places.service";

declare let cordova: any;

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  places: any = [];
  cordova: any;

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

  ionViewDidLoad() {
    if (typeof cordova !== "undefined") {
      alert(JSON.stringify(cordova));
      if (typeof window !== "undefined" && typeof window['plugins'] !== "undefined") {
        console.log(window['plugins'].acr122);

        // Wait for NFC read
        window['plugins']['acr122'].listen(function(event) {
          console.log("listen!");
          if (event.state == "Present") {
            alert("Scanned tag with id " + event.tag.id);
          }
        });
      }
    }
    // console.log('-> typeof', typeof acr122)
    // console.log("inbox loaded");
    // var nfc = window.acr122;

    // nfc.listen(function(event) {
    //   if (event.state == "Present") {
    //     alert("Scanned tag with id " + event.tag.id);
    //   }
    // });
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
