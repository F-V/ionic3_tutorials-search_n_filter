import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the DataFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-filter',
  templateUrl: 'data-filter.html',
})
export class DataFilterPage {
  filterData={
    gender:"",
    country:""
  }

  countries=[]

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams, private dataService:DataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataFilterPage');
    this.countries = this.dataService.data.map((item)=>{
      return item.country;
    })
  }

  dismiss() {
    console.log("dismissing filtermodal with data",this.filterData);
    this.viewCtrl.dismiss(this.filterData);
  }
  cancel(){
    this.viewCtrl.dismiss();
  }
}
