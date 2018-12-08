import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-assignmentview',
  templateUrl: 'assignmentview.html',
})
export class AssignmentviewPage {

  assignmentname:string;
  assignmentid:string;

  public questionno = [1];

  public awnsers = {};
  public awnsersMan = {};

  userDetails:any;
  resposeData:any;
  submissionResponse:any;
  dataSet:any;
  dataSetMan:any;

  assignmentpostdetails : {};

  assigmentfetch = {
    user_id : "",
    token : "",
    assignment : "",
    rollno:"" 
  }

  tempData = {};

  public showbt:boolean;
  public showtxt:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService : AuthServiceProvider, public alertCtrl: AlertController, private loadctrl: LoadingController) {
    this.assignmentname = navParams.get('assignmentname');
    this.assignmentid = navParams.get('assignmentid');

    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;

    this.assigmentfetch.assignment = this.assignmentid;
    this.assigmentfetch.user_id = this.userDetails.user_id;
    this.assigmentfetch.token = this.userDetails.token;
    this.assigmentfetch.rollno = this.userDetails.rollno;

    this.getQuestion();

    this.showbt = false;
    this.showtxt = false;
  }

  /****************** GET QUESTION USING ASSIGNMENT ID ************/

  getQuestion(){
    let zest = this.loadctrl.create({
      content: "Getting Data",
      duration:20000
    });  
    zest.present();
    this.authService.postData(this.assigmentfetch, "getasquestion").then((result) => {
      zest.dismiss();
        this.resposeData = result;
        this.dataSet = this.resposeData.questionMcq;
        this.dataSetMan = this.resposeData.questionMan;
        if(this.dataSet == null){
          this.showbt = false;
          this.showtxt = true;
        }
        else{
          this.showbt = true;
          console.log(this.dataSetMan);
        }
        
      }, (err) => {
        zest.dismiss();
        //Connection failed message
      });
  }

  /****************** SUBMISSION ASSIGNMENT ************/

  assignment_submit(){

    this.assignmentpostdetails = { 
      "classname" : this.userDetails.classname,
      "assignmentid" : this.assigmentfetch.assignment,
      "user_id" : this.userDetails.user_id,
      "token" : this.userDetails.token,
      "studentname" : this.userDetails.name,
      "rollno" : this.userDetails.rollno,
      "awnsers" : this.awnsers,
      "awnsersMan" : this.awnsersMan
    }

    let zest = this.loadctrl.create({
      content: "Submitting Assignment..",
      duration:20000
    });  
    zest.present();
     if(this.awnsers != null && this.awnsersMan != null){
       this.authService.postData(this.assignmentpostdetails, "assignmentsub").then((result) =>{
        zest.dismiss();
        this.submissionResponse = result;
        if(this.submissionResponse.Msg == "Success"){
          this.showalertsuccess();
          this.navCtrl.pop();
        }else{
          this.showalerterror();  
        } 
       }, (err) => {
        zest.dismiss();
       });
      }
      else{  
      }
  }

  showalertsuccess(){
    let alert = this.alertCtrl.create({
      title:this.assignmentname,
      subTitle:this.submissionResponse.Text,
      buttons:["OK"]
    });
    alert.present();
  }

  showalerterror(){
    let alert = this.alertCtrl.create({
      title:this.assignmentname,
      subTitle:"Assignment Submission Failed :(",
      buttons:["OK"]
    });
    alert.present();
  }


}
