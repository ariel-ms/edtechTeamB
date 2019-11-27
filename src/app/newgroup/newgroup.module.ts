import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewgroupPageRoutingModule } from './newgroup-routing.module';

import { NewgroupPage } from './newgroup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewgroupPageRoutingModule
  ],
  declarations: [NewgroupPage]
})
export class NewgroupPageModule {}
