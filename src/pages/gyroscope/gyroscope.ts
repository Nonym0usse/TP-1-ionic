import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
import { LocalNotifications } from '@ionic-native/local-notifications';


/**
 * Generated class for the GyroscopePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 */

@IonicPage()
@Component({
  selector: 'page-gyroscope',
  templateUrl: 'gyroscope.html',
})

export class GyroscopePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private gyroscope: Gyroscope, private localNotifications: LocalNotifications) {
    let options: GyroscopeOptions = {
       frequency: 1000
    };

    this.gyroscope.getCurrent(options)
      .then((orientation: GyroscopeOrientation) => {
         this.notif("X: "+ orientation.x + "Y: " + orientation.y + "Z: " + orientation.z + "timestamp " + orientation.timestamp);
       })
      .catch()


    this.gyroscope.watch()
       .subscribe((orientation: GyroscopeOrientation) => {
         this.notif("X: "+ orientation.x + "Y: " + orientation.y + "Z: " + orientation.z + "timestamp " + orientation.timestamp);
       });
  }


  public notif(data: string)
  {
      this.localNotifications.schedule({
          title: "Ionic App",
          text: data,
          at: new Date(new Date().getTime() + 0),
           badge: 1,
          led: 'FFFFFF' //led notifications pour android uniquement, couleur blanche
      });
  }
}
