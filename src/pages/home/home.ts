import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	option: string = "wyniki";
	option2: string = "kierowcy";
	races: any;
	calendar: any;
	top: any;
	ranking: any;
	teams: any;
	drivers: any;
  constructor(public navCtrl: NavController, private http: Http, private share: SocialSharing) {
  	this.http.get('assets/json/data.json').map(res => res.json()).subscribe(data => {
  			//console.log(data[0].standing[0].driver_name);
  			this.races = data;
          }
      );

  	this.http.get('assets/json/kalendarz.json').map(res => res.json()).subscribe(data => {
  			this.calendar = data;
          }
      );

  	this.http.get('assets/json/podium.json').map(res => res.json()).subscribe(data => {
  			this.top = data;
          }
      );

  	this.http.get('assets/json/ranking.json').map(res => res.json()).subscribe(data => {
  			this.ranking = data;
  			this.teams = data['rankings'][0]['standing'];
  			this.drivers = data['rankings'][1]['standing'];
          }
      );
  }

  regularShare(){
    this.share.share("Sciagnij MotoGP juz dzis!", null, null, null)
  }

  twitterShare(){
    this.share.shareViaTwitter("Sciagnij MotoGP juz dzis!", null, null);
  }

  facebookShare(){
    this.share.shareViaFacebook("Sciagnij MotoGP juz dzis!", null, null);
  }

  smsShare(){
    this.share.shareViaSMS("Sciagnij MotoGP juz dzis!", "535313514");
  }
}
