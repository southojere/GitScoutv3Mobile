import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../Models/user';
import { map } from 'rxjs/operators';
/*
  Generated class for the MainProvider provider.
  This class talks to firebase database.

  note: the code for determining if something already is in the firebase db is horrible... 
  ..i have reason...
*/
@Injectable()
export class MainProvider {

  //database fields
  private favourites = this.db.list<User>("favourites");//favourites
  private history = this.db.list<User>("history");//favourites



  //variable that is updated frequently
  contains: boolean = false;

  constructor(private toast: ToastController, private db: AngularFireDatabase) {

  }

  addToFavourites(newUser: User) {
    this.contains = false;
    this.AddIfWeCan(newUser);//checking it its valid to add if not we dont.
  }

  /**
   * Adds user into database
   * @param user user who we want to add into our list of favourites.
   */
  add(user: User) {
    this.favourites.push(user);
    this.displayToast("Added");
  }
  /**
   * Returns a list of the favourited github users
   * @returns firebase database list of Users
   * 
   */
  getFavouriteUsers() {
    //return this.favUsers;
    return this.favourites;
  }

  addToHistory(newUserProfile) {
    this.historyAddIfWeCan(newUserProfile)
  }

  getHistory() {
    return this.history;
  }

  /**
   * @param newUser 
   * Function determines if our newUser is in our database already
   * if not it calls add() to add it.
   * o.w doesnt add it.
   */
  AddIfWeCan(newUser: User) {
    if(newUser == null){
      return;
    }
    this.contains = false;
    let favUsers = this.favourites.snapshotChanges() //gives us key and value pairs
      .pipe(
        map(changes => {
          return changes.map(c => ({
            key: c.key,
            ...c.payload.val()
          }));
        })
      ).subscribe(data => {
        data.forEach(elem => {
          if (elem.login == newUser.login) {
            this.contains = true;
          }
        })
        if (!this.contains) {
          //DOESNT CONTAIN. ADD IT.
          this.add(newUser);
        } else {
          //cannot add
          this.displayToast("Already Added");
        }
      });
  }

  //Helper function
  historyAddIfWeCan(newUser) {
    if(newUser == null){
      return;
    }
    this.contains = false;
    let history = this.history.snapshotChanges() //gives us key and value pairs
    .pipe(
      map(changes => {
        return changes.map(c => ({
          key: c.key,
          ...c.payload.val()
        }));
      })
    ).subscribe(data => {
      data.forEach(elem => {
        if (elem.login == newUser.login) {
          this.contains = true;
        }
      })
      if (!this.contains) {
        //DOESNT CONTAIN. ADD IT.
        this.history.push(newUser);
      }
    });
  }

  //helper function: displays Message to user about interaction.
  displayToast(msg) {
    let toast = this.toast.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
}
