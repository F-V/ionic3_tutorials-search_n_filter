import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataFilterPage } from './data-filter';

@NgModule({
  declarations: [
    DataFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(DataFilterPage),
  ],
})
export class DataFilterPageModule {}
