import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { VideoPlayer } from '@ionic-native/video-player';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})

export class VideoPage {


 constructor(public navCtrl: NavController, private mediaCapture: MediaCapture, private videoPlayer: VideoPlayer) {

 }

 webcam(){
   let options: CaptureImageOptions = { limit: 3 };
   this.mediaCapture.captureVideo(options)
       .then(
           (data: MediaFile[]) => {
             console.log(data);
             this.videoPlayer.play(data[0].fullPath).then(() => {
               console.log('video completed');
              }).catch(err => {
               console.log(err);
              });
           },
           (err: CaptureError) => console.error(err)
       );
 }

}
