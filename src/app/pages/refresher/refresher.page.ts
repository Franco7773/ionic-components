import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];
  timer$ = timer( 1500 );

  constructor() { }

  ngOnInit() {
  }

  doRefresh( event ) {
    this.timer$.subscribe(() => {

      this.items = Array( 50 );
      event.target.complete();
    });
  }
}
