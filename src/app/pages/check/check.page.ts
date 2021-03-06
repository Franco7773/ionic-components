import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  public data = [
    {
      name: 'success',
      selected: false
    }, {
      name: 'secondary',
      selected: true
    }, {
      name: 'tertiary',
      selected: false
    }, {
      name: 'warning',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
