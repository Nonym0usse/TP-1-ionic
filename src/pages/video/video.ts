import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { VideoPlayer } from '@ionic-native/video-player';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * Ici, on a la capture vidéo du téléphone et qui sera stocké dans sa mémoire.
 * Ensuite, on a une gestion d'erreur en cas de problèmes, on envoie une notification.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})

export class VideoPage {


 constructor(public navCtrl: NavController, private mediaCapture: MediaCapture, private videoPlayer: VideoPlayer, private localNotifications: LocalNotifications) {

 }

 webcam(){

   let options: CaptureImageOptions = { limit: 3 };

   this.mediaCapture.captureVideo(options)
       .then(
           (data: MediaFile[]) => {
             this.videoPlayer.play(data[0].fullPath).then(() => {
               this.notif('Vidéo enregistrée.')
              }).catch(err => {
                this.notif('Vidéo non enregistrée.')
              });
           },
           (err: CaptureError) => console.error(err)
       );
     }

     public notif(data: string)
     {
         this.localNotifications.schedule({
             title: "Ionic App",
             text: data,
             at: new Date(new Date().getTime() + 0)
         });
     }
   }
