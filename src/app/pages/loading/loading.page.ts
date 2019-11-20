import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  timer$ = timer( 3000 );
  loading: any;

  constructor( private loadingCtrl: LoadingController ) { }

  ngOnInit() {

    this.presentLoading('Por favor, espere...');

    this.timer$.subscribe(() => this.loading.dismiss());
  }


  async presentLoading( msg: string ) {
    this.loading = await this.loadingCtrl.create({
      message: msg,
      // duration: 23000
    });
    return this.loading.present();
  }
}
