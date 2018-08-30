import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavouritesPage } from './favourites';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FavouritesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(FavouritesPage)
  ],
})
export class FavouritesPageModule {}
