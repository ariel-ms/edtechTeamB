import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {

  @Input('class') class: any;
  constructor(private toatCtrl: ToastController) { }

  ngOnInit() {}

  async selectClass(class) {
    let toast = await this.toastCTrl.create({
      message: `Added to the cart: ${class.name}`
    });
    toast.present();
  }
}
