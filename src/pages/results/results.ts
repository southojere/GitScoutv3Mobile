import { Component } from '@angular/core';
import { IonicPage, NavParams, LoadingController, Loading } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';
import { User } from '../../models/user';
import { Repository } from '../../models/repository';
import { MainProvider } from '../../providers/main/main';

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  username: string;
  user: User;
  repositories: Repository[];


  constructor(private loading: LoadingController,private navParams: NavParams, private github: GithubProvider, private main_provider: MainProvider) {

  }

  //Before this view loads get our info...
  ionViewWillLoad() {
    let loader = this.showLoading();
    this.username = this.navParams.get('username');
    this.getUserInformation();
    this.dismissLoading(loader);
  }

  //Gets our information from our provider 
  getUserInformation(): void {
    this.github.getUserInformation(this.username).subscribe(data => {
      this.user = data;
      //add to history of profiles we have viewed
      this.addToHistory(data); //once we have the information about this user
    });
    this.github.getRepositoryInformation(this.username).subscribe(data => this.repositories = data);
  }

  //adding this user to favourites
  addToFavourites(thisUser) {
    this.main_provider.addToFavourites(thisUser);
  }

  //add profile to history
  addToHistory(thisUser) {
    this.main_provider.addToHistory(thisUser);
  }

  /**
   * Loading pop up functions
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
