import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	shownGroup = null;
	drivers: any;
  constructor(public navCtrl: NavController, public http: Http) {
  	this.http.get('assets/json/drivers.json').map(res => res.json()).subscribe(data => {
  			//console.log(data[0].standing[0].driver_name);
  			this.drivers = data['standing'];
          }
      );
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
	};

	isGroupShown(group) {
	    return this.shownGroup === group;
	};
}
