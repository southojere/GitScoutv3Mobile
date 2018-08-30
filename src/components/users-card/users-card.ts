import { Component, Input } from '@angular/core';
import { MainProvider } from '../../providers/main/main';
import { NavController, AlertController } from 'ionic-angular';


/**
 * Generated class for the UsersCardComponent component.
 *
 * UserCardComponent will listen an manage functions that are on the users card component.
 * E.g. selecting to view more of the user, and favouriting the users
 * 
 * It will then call functions in our main provider to store it.
 */
@Component({
  selector: 'users-card',
  templateUrl: 'users-card.html'
})
export class UsersCardComponent {

  @Input() userCard;
  constructor(private navController: NavController, public main_provider: MainProvider, private alertCtrl: AlertController) {

  }

  openUsersProfile(userLogin) {
    this.navController.push('ResultsPage', {
      username: userLogin
    })
  }

  displayPopUpCard() {
    let alert = this.alertCtrl.create({

      title: this.userCard.name,
      subTitle: this.userCard.login,
      message:
        "Followers: " + this.userCard.followers +
        "\n Following: " + this.userCard.following +
        "\nGists: " + this.userCard.public_gists +
        "\nRepositories: " + this.userCard.public_repos +
        "\nContributions: " + 0,
      buttons: [
        {
          text: "Cancel",
        },
        {
          text: "View Full Profile",
          handler: data => {
            this.navController.push('ResultsPage', {
              username: this.userCard.login
            })
          }
        }
      ]
    });
    alert.present();
  }
  
}
