import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AssignmentsPage } from '../pages/assignments/assignments';
import {StudyhubPage } from '../pages/studyhub/studyhub';
import {PlacementPage } from '../pages/placement/placement';
import {FeedbackPage } from '../pages/feedback/feedback';
import {AskqueryPage } from '../pages/askquery/askquery';
import {DevPage } from '../pages/dev/dev';
import {ProfilePage } from '../pages/profile/profile';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { FeedbackProvider } from '../providers/feedback/feedback';
import { AssignmentviewPage } from '../pages/assignmentview/assignmentview'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IntroPage,
    LoginPage,
    SignupPage,
    AssignmentsPage,
    StudyhubPage,
    PlacementPage,
    FeedbackPage,
    AskqueryPage,
    DevPage,
    ProfilePage,
    AssignmentviewPage
    
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IntroPage,
    LoginPage,
    SignupPage,
    AssignmentsPage,
     StudyhubPage,
     PlacementPage,
     FeedbackPage,
     AskqueryPage,
     DevPage,
     ProfilePage,
     AssignmentviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    FeedbackProvider
  ]
})
export class AppModule {
}
