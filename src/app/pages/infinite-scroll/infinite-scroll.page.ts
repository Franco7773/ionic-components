import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: false }) private infiniteScroll: IonInfiniteScroll;

  public data = Array(23);

  constructor() { }

  ngOnInit() {
  }

  loadData( event ) {
    console.log(event);

    setTimeout(() => {

      if (this.data.length > 150) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const newArr = Array(25);
      this.data.push( ...newArr );
      event.target.complete();

    }, 1000);
  }
}
