import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private videoCapturePlus: VideoCapturePlus) {

  }
  video(){
    const options: VideoCapturePlusOptions = {
       limit: 1,
       highquality: true,
       portraitOverlay: 'assets/img/camera/overlay/portrait.png',
       landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
    }
  }
}
