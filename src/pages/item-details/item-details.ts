import { Component } from '@angular/core';

import { NavController, NavParams, Platform, ActionSheetController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  testRadioOpen: boolean;
  testRadioResult;

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
            let confirm = this.alertCtrl.create({
            	title: 'Delete Item',
            	message: 'Are you sure want to delete item?',
            	buttons: [
            		{
            			text: 'No',
            			handler: () => {
            				console.log('Click on cancel');
            			}
            		},
            		{
            			text: 'Yes',
            			handler: () => {
            				console.log('Delete it');
            			}
            		}
            	]
            });
            confirm.present();
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
            let alert = this.alertCtrl.create({
            	title: 'Share item',
            	subTitle: 'You want to share this item.',
            	buttons: ['OK']
            });
            alert.present();
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
            let prompt = this.alertCtrl.create({
            	title: 'Your song title...',
            	message: 'Search your favourite song by enter title here',
            	inputs: [{
            		name: 'title',
            		placeholder: 'Title'
            	}],
            	buttons: [{
            		text: 'Cancel',
            		handler: data => {
            			console.log('Click on cancel')
            		}
            	},{
            		text: 'Save',
            		handler: data => {
            			console.log('Click on save with data', data.title);
            		}
            	}]
            });
            prompt.present();
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  openRadio() {
  	let radio = this.alertCtrl.create({
  		title: 'Select color',
  		inputs: [{
  			type: 'radio',
  			label: 'Blue',
  			value: 'blue',
  			checked: true
  		},{
  			type: 'radio',
  			label: 'Red',
  			value: 'red'
  		},{
  			type: 'radio',
  			label: 'Green',
  			value: 'green'
  		}],
  		buttons: [{
  			text: 'cancel',
  			handler: () => {
  				console.log('on click cancel');
  			}
  		},{
  			text: 'Ok',
  			handler: data => {
  				console.log(data);
  				this.testRadioOpen = false;
  				this.testRadioResult = data;
  			}
  		}]
  	});

  	radio.present().then(() => {
  		this.testRadioOpen = true;
  	});
  }
}
