import { Component} from '@angular/core';
import { NavController, Platform,IonicPage } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'

})
export class MapPage {
map: GoogleMap;
lat:any; lang:any;
  constructor(public navCtrl: NavController, private platform: Platform) {
    platform.ready().then(() => { this.loadmap();})
       
  }


  loadmap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas',mapOptions);

    // You need to wait the `MAP_READY` event until the native side is ready.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
                
            });
        });

    });

    }
}
