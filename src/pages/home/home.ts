import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

public base64Image: string;

    constructor(public navCtrl: NavController, private camera: Camera, private localNotifications: LocalNotifications, private base64ToGallery: Base64ToGallery) {
  }

    webcam(){
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
        }

        this.camera.getPicture(options).then((imageData) => {

            this.base64Image = imageData;
            this.base64ToGallery.base64ToGallery(this.base64Image, {prefix: '_img', mediaScanner: false}).then( //mediascanner est à false pour iOS
              res => this.notif('Image bien enregistrée !'),
              err => this.notif('Image non sauvegardée...')
            );
        }, (err) => {
        });
    }


    public notif(data: string)
    {
        this.localNotifications.schedule({
            title: "Ionic App",
            text: data,
            at: new Date(new Date().getTime() + 0),
            icon: 'http://nodeimpact.com/images/favicons/apple-icon-57x57.png', //uniquement pour android
            badge: 1,
            led: '888888' //led notifications pour android uniquement, couleur rouge
        });
    }
}
