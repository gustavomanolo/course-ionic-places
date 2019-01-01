import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TerceraPage } from "../tercera/tercera";
import { PlacesService } from "../../services/places.service";

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-lugar",
  templateUrl: "lugar.html"
})
export class LugarPage {
  place: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public placesService: PlacesService
  ) {
    this.place = navParams.get("place");
  }

  savePlace() {
    // console.log(this.place);
    if (!this.place.id) {
      this.place.id = Date.now();
    }

    // GO back
    alert("Lugar guardado");
    this.navCtrl.pop();

    this.placesService.createPlace(this.place);
  }

  // ionViewDidLoad() {
  //   console.log("ionViewDidLoad LugarPage");
  // }

  // goBack() {
  //   this.navCtrl.pop();
  // }

  // goTo3rd() {
  //   this.navCtrl.push(TerceraPage)
  // }
}
