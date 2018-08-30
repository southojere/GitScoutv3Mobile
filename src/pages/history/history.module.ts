import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HistoryPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HistoryPage),
  ],
})
export class HistoryPageModule {}
