import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController) { }

  ngOnInit() {
  }

  async login() {
    const { username, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + "@berkeley.edu", password)
      if (res) {
        this.navCtrl.navigateForward('/home');
      }
    } catch(err) {
      console.dir(err)
      if (err.code === "auth/user-not-found") {
        console.log("user not found")
      }
    }
  }
}
