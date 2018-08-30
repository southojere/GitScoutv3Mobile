import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { GithubProvider } from '../../providers/github/github';
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  username: string = "southojere";
  user: User

  //field for sorting users
  sortByMethod: string;
  location: string;
  resultsWanted:string; 
  constructor(private navController: NavController, private alertController: AlertController,private github: GithubProvider) {
  }


  getUserInformation(): void {

    this.navController.push('ResultsPage', {
      username: this.username
    })
  }

  /* 
    For finding a specific user
  */
  searchForUser(): void {
    let searchUser = this.alertController.create({
      title: "Username",
      message: "Please enter a username",
      inputs: [
        {
          type: "text",
          name: "Username",//helpful for later access of input an id
        }
      ],
      buttons: [
        {
          text: "Search",
          handler: (input) => {
            let usersnameInput;
            usersnameInput = input.Username;
            this.username = usersnameInput;
            if(!this.username)
              return;
            this.getUserInformation();//Go to userinfo screen
          }
        }
      ]
    });
    searchUser.present();

  }

  getUsersInformation(){
    this.navController.push('UsersResultsPage', {
      sortBy: this.sortByMethod,
      location: this.location,
      numOfResults: this.resultsWanted
    })
  }

}
