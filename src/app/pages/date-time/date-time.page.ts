import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  public fechaNaci = new Date();
  public customPickerOptions;
  public customDate;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( event ) => {
          console.log('Clicked Save!');
          console.log( event );
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log!');
          return false;
        },
      }]
    };
  }

  cambioFecha( event ) {
    console.log('ionChange: ', new Date( event.detail.value )  );
  }
}
