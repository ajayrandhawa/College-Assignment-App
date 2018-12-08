import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {SignupPage} from '../signup/signup';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController,private menuCtrl: MenuController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  gotologin(){
    this.navCtrl.push(LoginPage);
  }

  gotoregister(){
    this.navCtrl.push(SignupPage);
  }

  showalertinfo(){
    let alert = this.alertCtrl.create({
      title:"Notification",
      subTitle:"Visit * for Registration",
      buttons:["OK"]
    });
    alert.present();
  }
  
}
