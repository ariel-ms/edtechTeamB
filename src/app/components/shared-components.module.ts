import { ClassesComponent } from './classes/classes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ClassesComponent],
  imports: [
    CommonModule
  ],
  exports: [ClassesComponent]
})
export class SharedComponentsModule { }
