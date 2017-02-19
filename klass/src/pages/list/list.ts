import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  names: Array<{name: string, picture:string, rating: number, numberOfRatings:number}>;
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.names = []
    this.names.push({name:'Juan J', picture:'#', rating: 3.2, numberOfRatings:20});
    this.names.push({name:'Rokney R',picture:"#",rating:4.0,  numberOfRatings:120});
    this.names.push({name:'Kat L',picture:"#",rating:3.9,  numberOfRatings:50});
    this.names.push({name:'Rashid A',picture:"#",rating:4.7,  numberOfRatings:30});

  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
