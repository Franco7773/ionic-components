import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('list', { static: false }) private list: IonList;

  public usuarios: Observable<object>;

  constructor( private dataService: DataService, private toastCtrl: ToastController ) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  async presentToast( msg: string ) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2300
    });
    toast.present();
  }

  share( user ) {
    console.log('share', user );
    this.presentToast('Compartido!');
    this.list.closeSlidingItems();
  }

  trash( user ) {
    console.log('trash', user );
    this.presentToast('Eliminado!');
    this.list.closeSlidingItems();
  }


}
