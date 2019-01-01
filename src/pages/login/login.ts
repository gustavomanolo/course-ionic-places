import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { AuthService } from "../../services/auth.service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewController: ViewController,
    public authService: AuthService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  // Functino to do login with facebook
  FacebookLogin() {
    this.authService.loginWithFacebook().then(resultLogin => {
      alert("Login con éxito");
      this.viewController.dismiss();

      // Save session with locaStorage
      localStorage.setItem("login", JSON.stringify(resultLogin));
    });
  }

  // Cancel login and close windows
  cancelLogin() {
    this.viewController.dismiss();
  }
}
