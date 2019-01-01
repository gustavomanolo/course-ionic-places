import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

@Injectable()
export class AuthService {
  constructor(
    public afDB: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {}

  loginWithFacebook() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  logoutFacebook() {
    return this.afAuth.auth.signOut();
  }
}
