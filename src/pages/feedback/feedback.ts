import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FeedbackProvider } from '../../providers/feedback/feedback';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  public date;
  

  public userDetails : any;
  public resposeData : any;
  public dataSet : any;
  public feedback = {};
  public finalpostdata = {};
  userPostData = {
    "user_id": "",
    "rollno": "",
    "branch":"",
    "sem":"",
    "token": "",
  };

  public showbt:boolean;
  public showtxt:boolean;

//////////////////////////Constructor

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService : AuthServiceProvider, public alertCtrl: AlertController, public fedup: FeedbackProvider, private loadctrl: LoadingController) {
    this.date =  new Date(); 
    this.showbt = false;
    this.showtxt = true;
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData = this.userDetails;
    this.getFeed();
  }

  //////////////////////////Get Subject

  getFeed() {
    let zest = this.loadctrl.create({
      content: "Getting Data"
    });  
    zest.present();
    this.authService.postData(this.userPostData, "feed").then((result) => {
      zest.dismiss();
        this.resposeData = result;
        if (this.resposeData.feedData) {
          this.dataSet = this.resposeData.feedData;
          if(this.dataSet != null){
            this.showbt = true;
            this.showtxt = false;
          }
        } else {
          zest.dismiss();
          console.log("No access app");
        }

      }, (err) => {
        zest.dismiss();
        //Connection failed message
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

//////////////////////////

    tempData = [];
    tempuser = {};
    tempsubject = {};
    tempfeedback = {};

  
   
     uploadfeedbackfunction(){
      let zest = this.loadctrl.create({
        content: "Submitting Feedback"
      });  
      zest.present();
       this.tempuser = {'user':this.userDetails};
       this.tempsubject = {'subject':this.dataSet};
       this.tempfeedback = {'feedback':this.feedback};
       this.tempData = [this.tempuser,this.tempsubject,this.tempfeedback];
       this.finalpostdata = this.tempData;
        
       if(true){
         this.fedup.postData(this.finalpostdata, "feedbackupload").then((result) =>{
          zest.dismiss();
          this.showalertsuccess();
          this.resposeData = result;
          this.navCtrl.pop();
         }, (err) => {
          zest.dismiss();
         });
        }
        else{  
        }
      }
     
   
  showalertsuccess(){
    let alert = this.alertCtrl.create({
      title:"Feedback",
      subTitle:" Submitted Successfully!",
      buttons:["OK"]
    });
    alert.present();
  }

 
}
