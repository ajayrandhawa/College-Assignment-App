import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  resposeData : any;
  userData = {"rollno":"", "password":""};

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, public authService: AuthServiceProvider, public alertCtrl: AlertController, private loadingCtrl: LoadingController) {
      this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){
    let loader = this.loadingCtrl.create({
          content: "Fetching Server",
          duration: 10000
        });  
        loader.present();
    if(this.userData.rollno != "" && this.userData.password != ""){
     this.authService.postData(this.userData, "login").then((result) =>{
      loader.dismiss();
     this.resposeData = result;
     console.log(this.resposeData);
     if(this.resposeData.userData){
            localStorage.setItem('userData', JSON.stringify(this.resposeData) )
            this.showalertsuccess();
            this.navCtrl.setRoot(HomePage);
        } 
     }, (err) => {
     loader.dismiss();
      this.showalertinfo();
       //Connection failed message
     });
    }
    else{
     loader.dismiss();
     this.showalertinfo();
    }
   
   }

  showalertinfo(){
    let alert = this.alertCtrl.create({
      title:"Notification",
      subTitle:"Give Valid Information",
      buttons:["OK"]
    });
    alert.present();
  }

  showalertsuccess(){
    let alert = this.alertCtrl.create({
      title:"Login Success!",
      subTitle:"Welcome Students",
      buttons:["OK"]
    });
    alert.present();
  }
}
