import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignmentsPage } from './assignments';

@NgModule({
  declarations: [
    AssignmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignmentsPage),
  ],
})
export class AssignmentsPageModule {}
