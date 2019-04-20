import { Component } from '@angular/core';
import { SelectOptionPage} from '../select-option/select-option';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})


export class HelloIonicPage {
  userName: ""
  password: ""
  constructor(private navCtrl: NavController) {
  
}
 
tryLogin(){
  if(this.userName.localeCompare("admin") == 0 && this.password.localeCompare("password") == 0){
    this.navCtrl.push(SelectOptionPage);
  }else{
    alert("Wrong password or username");
  }
}

}