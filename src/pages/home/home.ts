import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userDetails : any;
  public userPostData : any;
  public resposeData : any;
  public dataSet : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
      this.menuCtrl.enable(true);

  }
  
}
