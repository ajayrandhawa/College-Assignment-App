import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { HomePage } from '../pages/home/home';
import { AssignmentsPage } from '../pages/assignments/assignments';
import {StudyhubPage } from '../pages/studyhub/studyhub';
import {PlacementPage } from '../pages/placement/placement';
import {FeedbackPage } from '../pages/feedback/feedback';
import {AskqueryPage } from '../pages/askquery/askquery';
import {DevPage } from '../pages/dev/dev';
import {ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public userDetails : any;
  rootPage: any = IntroPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  onclickHome(){
    this.nav.setRoot(HomePage);
  }

  onclickAssignments(){
    this.nav.push(AssignmentsPage);
  }

   onclickstudyhub(){
    this.nav.push(StudyhubPage);
  }

  onclickplacement(){
    this.nav.push(PlacementPage);
  }

  onclickfeedback(){
    this.nav.push(FeedbackPage);
  }

  onclickquery(){
    this.nav.push(AskqueryPage);
  }

  onclickdev(){
    this.nav.push(DevPage);
  }

  onclicklogout(){
    localStorage.clear();
      this.nav.setRoot(IntroPage);
  }

  onclickprofile(){
    this.nav.push(ProfilePage);
  }
}
