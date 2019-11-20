import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumes: any[] = [];
  busqueda = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe( data => {
      this.albumes = data;
    });
  }

  buscar( event: CustomEvent ) {
    this.busqueda = event.detail.value;
    console.log(event.detail.value);
  }
}
