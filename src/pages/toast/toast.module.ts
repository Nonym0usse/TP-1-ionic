import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToastPage } from './toast';
import { ToastController } from 'ionic-angular';

@NgModule({
  declarations: [
    ToastPage,
  ],
  imports: [
    IonicPageModule.forChild(ToastPage),
  ],
})
export class ToastPageModule {}
