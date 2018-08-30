import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App, Tab } from 'ionic-angular';
/**
 * Generated class for the StartUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start-up',
  templateUrl: 'start-up.html',
})
export class StartUpPage {
  tabPage = "TabsPage";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  start() {
    this.navCtrl.push(this.tabPage);
  }
}
