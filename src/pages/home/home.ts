import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage} from '../info/info';
import { ContactPage} from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
goAnOtherPage() { this.navCtrl.push(ContactPage); }
goSchoolInfoPage() { this.navCtrl.push(InfoPage); }


}
