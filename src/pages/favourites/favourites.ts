import { Component } from '@angular/core';
import { IonicPage, LoadingController, Loading } from 'ionic-angular';
import { MainProvider } from '../../providers/main/main';
import { User } from '../../Models/user';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  favouriteUsers$: Observable<User[]>;

  constructor(private loading: LoadingController, private main_provider: MainProvider) {
    //this.favouritedUsers = main_provider.getFavouriteUsers();
    //Magic bellow >.<
    let loadvar = this.showLoading();
    this.favouriteUsers$ = this.main_provider
      .getFavouriteUsers() //DB LIST
      .snapshotChanges() //gives us key and value pairs
      .pipe(
        map(changes => {
          return changes.map(c => ({
            key: c.key,
            ...c.payload.val()
          }));
        })
      );
      this.dismissLoading(loadvar);
  }

  showLoading() {
    let loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    return loader;
  }

  dismissLoading(loader: Loading) {
    loader.dismiss();
  }
}
