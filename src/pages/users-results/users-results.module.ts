import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersResultsPage } from './users-results';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    UsersResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersResultsPage),
    ComponentsModule
  ],
})
export class UsersResultsPageModule {}
