import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {Deploy} from '@ionic/cloud-angular'; // DEPLOY SERVIVCE: http://docs.ionic.io/services/deploy/

import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular'; // AUTH Package


import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})



// New contructor defition: 

export class MyApp {
  rootPage = TabsPage;

//  constructor(public deploy: Deploy) {
//    
//      
//    };

 constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  
}


export class LoginPage {
  constructor(public auth: Auth, public user: User) {
    ...
  }
}


/**
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

**/
