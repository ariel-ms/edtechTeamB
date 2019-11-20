import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {

  @Input('lecture') lecture: any;
  constructor(private toastCTrl: ToastController) { }

  ngOnInit() {}

  async selectClass(lecture) {
    let toast = await this.toastCTrl.create({
      message: `Added lecture: ${lecture.name}`
    });
    toast.present();
  }
}
