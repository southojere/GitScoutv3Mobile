import { Component } from '@angular/core';
import { IonicPage, LoadingController, Loading } from 'ionic-angular';
import { MainProvider } from '../../providers/main/main';
import { User } from '../../Models/user';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  historyUsers$: Observable<User[]>;


  profileHistory = [];
  constructor(public main_provider:MainProvider) {
    // this.profileHistory = main_provider.getHistory();
     //Magic bellow >.<
     this.historyUsers$ = this.main_provider
       .getHistory() //DB LIST
       .snapshotChanges() //gives us key and value pairs
       .pipe(
         map(changes => {
           return changes.map(c => ({
             key: c.key,
             ...c.payload.val()
           }));
         })
       );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
