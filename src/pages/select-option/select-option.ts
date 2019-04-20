import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { RecordPage } from '../record/record';
import { CameraPage } from '../camera/camera';
import { SpotifyPage } from '../spotify/spotify';


/**
 * Generated class for the SelectOptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-option',
  templateUrl: 'select-option.html',
})
export class SelectOptionPage {
  
  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController) {
      
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectOptionPage');
   
  }

  spotifyOpt(){
    this.navCtrl.push(SpotifyPage);
  }

  cameraOpt(){
      this.navCtrl.push(CameraPage);
  }

  geoOpt(){
    this.navCtrl.push(MapPage);
  }

  recordOpt(){
    this.navCtrl.push(RecordPage);
  }
 
}
