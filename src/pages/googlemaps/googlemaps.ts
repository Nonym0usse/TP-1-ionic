import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { Component, ViewChild, ElementRef } from "@angular/core/";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


declare var google: any;

@Component({
  selector: 'page-googlemaps',
  templateUrl: 'googlemaps.html'
})
export class GooglemapsPage {
  @ViewChild('map') mapRef: ElementRef;
  map: any;
  coord1: Geoun;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, private geolocation: Geolocation) { }

  ionViewDidLoad() {
   this.loadMap();
   this.coord1 = new Geoun(0, 0);
  }

 loadMap(){

   const location = new google.maps.LatLng(51.507351, -0.127758);
   const options = {
     center: location,
     zoom: 10
   }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }
}

class Geoun{

 constructor( public latitude: number, public longitude: number){ }

 }
