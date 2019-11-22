import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { error } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController) { }

  ngOnInit() {
  }

  async register() {
    const {username, password, cpassword } = this
    if (password !== cpassword) {
      return console.error("Passwords dont match")
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + "@berkeley.edu", password);
      console.log(res)
      if (res) {
        this.navCtrl.navigateForward('/login');
      }
    } catch(err) {
      console.dir(error);
    }
  }
}
