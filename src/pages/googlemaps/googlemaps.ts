import { LatLng } from '@ionic-native/google-maps';
import { Component, ViewChild, ElementRef } from "@angular/core/";
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LocalNotifications } from '@ionic-native/local-notifications';


declare var google: any;

/**
* Ici on a la page Google Maps avec la géolocalisation de l'utilisateur avec un marker.
* On utilise aussi la géoloc pour set un marker à la position de l'utilisateur
*/

@Component({
  selector: 'page-googlemaps',
  templateUrl: 'googlemaps.html'
})
export class GooglemapsPage {
  @ViewChild('map') mapRef: ElementRef;
  map: any;
  userPosition: myGeoloc;


  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private localNotifications: LocalNotifications) {

   }

  ionViewDidLoad()
  {
    this.displayMap();
  }

  public notif(data: string)
  {
      this.localNotifications.schedule({
          title: "Ionic App",
          text: data,
          at: new Date(new Date().getTime() + 0),
          badge: 1,
      });
  }

  displayMap()
  {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.userPosition = new myGeoloc(resp.coords.latitude, resp.coords.longitude); //Utilisation de la géoloc native du tél

          const options = {
            center: new LatLng(this.userPosition.latitude, this.userPosition.longitude), //on centre la caméra de la map sur notre position
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }

          this.map = new google.maps.Marker({
            position: new LatLng(this.userPosition.latitude, this.userPosition.longitude), //on set le marker à notre position
            map: this.map,
            animation: google.maps.Animation.DROP //petite animation effet descente du marker
          });

          this.map = new google.maps.Map(this.mapRef.nativeElement, options); //création de la map

        }).catch((error) => {
          this.notif('Error lors de la création de Google Maps : ' + error); //gestion erreur en cas de problème via une notification
        });
  }
}


class myGeoloc{
  constructor( public latitude: number, public longitude: number){ }
}
