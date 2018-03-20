import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { DataFilterPage } from '../data-filter/data-filter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  search="";
  currentItems:any=[];
  constructor(public navCtrl: NavController,private dataService: DataServiceProvider,private modalCtrl:ModalController) {

  }
  ionViewDidEnter(){
    console.log("ionViewDidEnter homepage");
    this.currentItems = this.dataService.data;

  }
  getItems(ev) {
    console.log("filtering data",ev);
    let val = ev.target.value;
    if (!val || !val.trim()) {
      console.log("no first_name filter");
      this.currentItems = this.dataService.data;
      return;
    }
    this.currentItems = this.dataService.query({
      first_name: val
    });
  }

  filterAdvanced() {
    let filterDataModal = this.modalCtrl.create(DataFilterPage);
    filterDataModal.onDidDismiss(data=>{
      console.log("modal returned data",data);
      if(data){
        this.currentItems= this.dataService.query({
          country:data.country,
          gender:data.gender,
          first_name: this.search
        });
        console.log("filtering with",this.search,data.country,data.gender);
        console.log("current items after filtermodal",this.currentItems);
      }
    });
    filterDataModal.present();
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: any) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
