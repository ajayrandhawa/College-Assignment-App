import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { MyApp } from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    
  responseData : any;
  userData = {"name": "","rollno": "","mobno": "","password": "","classname": "","classcode": ""};

 constructor(public navCtrl: NavController,public authService:AuthServiceProvider, private menuCtrl: MenuController, public alertCtrl: AlertController, private loadingCtrl: LoadingController) {
      this.menuCtrl.enable(false);
  }

  showalertinfo(){
    let alert = this.alertCtrl.create({
      title:"Notification",
      subTitle:"Give Valid Information",
      buttons:["OK"]
    });
    alert.present();
  }

  showalertconnect(){
    let alert = this.alertCtrl.create({
      title:"Notification",
      subTitle:"Connection Failed!",
      buttons:["OK"]
    });
    alert.present();
  }

  showalertsuccess(){
    let alert = this.alertCtrl.create({
      title:"Success!",
      subTitle:"You are Registered Sucessfully!",
      buttons:["OK"]
    });
    alert.present();
  }


  signup(){
    let loader = this.loadingCtrl.create({
      content: "Fetching Server"
    });  
    loader.present();
    if(this.userData.name && this.userData.password && this.userData.rollno && this.userData.classname && this.userData.classcode && this.userData.mobno){
      //Api connections
    this.authService.postData(this.userData, "signup").then((result) =>{
      loader.dismiss();
    this.responseData = result;
    if(this.responseData.userData == null){
       this.showalertinfo();
      }else{
        localStorage.setItem('userData', JSON.stringify(this.responseData) );
        this.showalertsuccess();
        this.gotohome();
      }
    }, (err) => {
      loader.dismiss();
      this.showalertconnect();
    });
  }
  else {
    loader.dismiss();
    this.showalertinfo();
  }
}

gotohome(){
  this.navCtrl.setRoot(HomePage);
}

}
