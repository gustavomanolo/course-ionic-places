import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaceAddPage } from './place-add';

@NgModule({
  declarations: [
    PlaceAddPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaceAddPage),
  ],
})
export class PlaceAddPageModule {}
