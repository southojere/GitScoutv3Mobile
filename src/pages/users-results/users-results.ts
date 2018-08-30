import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';

/**
 * Generated class for the UsersResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-users-results',
  templateUrl: 'users-results.html',
})
export class UsersResultsPage {

  //filtering variables
  location: string;
  gists: boolean;
  repos: boolean;
  contributions: boolean;
  followers: boolean;

  //store list of users retreived from provider
  users = [];

  constructor(private loading: LoadingController, public navCtrl: NavController, public navParams: NavParams, private github: GithubProvider) {

  }

  //Before this view loads get our info...
  ionViewWillLoad() {
    let loadvar = this.showLoading();
    this.getUsersInformation();
    this.dismissLoading(loadvar);
  }

  /**
   * Navigates array of users json
   * and adds each users json into users list
   * 
   * populates users list.
   */
  getUsersInformation() {
    let sortByVar: string = this.navParams.get("sortBy");
    let location: string = this.navParams.get("location");
    let numOfResults: string = this.navParams.get("numOfResults");
    // let baseUrl = "https://api.github.com/users/";

    this.github.getSortedResults(location, sortByVar, numOfResults).subscribe(data => {
      data.items.forEach(element => {
        let usersname: string = element.login;
        let userObservable = this.github.getUserInformation(usersname);//getting users json 
        userObservable.subscribe(data => this.users.push(data));
      });
    });
    //TODO
  }


  /**
   * Bellow methods are for displaying loader
   */
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
