import { ClassesComponent } from './classes/classes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ClassesComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ClassesComponent]
})
export class SharedComponentsModule { }
