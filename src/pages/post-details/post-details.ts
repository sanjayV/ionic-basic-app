import { Component } from '@angular/core';

import { NavController, NavParams, Platform, ActionSheetController, AlertController } from 'ionic-angular';


@Component({
  selector: 'post-details',
  templateUrl: 'post-details.html'
})
export class PostDetailsPage {
  selectedPost: {};

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    console.log("navParams.get('post')",navParams.get('post')[0])
    this.selectedPost = navParams.get('post')[0];
  }
}
