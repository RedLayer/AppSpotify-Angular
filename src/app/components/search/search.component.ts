import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  termino: string;

  constructor(public _spotify: SpotifyService) {


  }


  ngOnInit() {
  }

  buscarArtista() {

    if (! this.termino)  {
      return;
    }
    console.log(this.termino);
    this._spotify.getArtistas(this.termino).subscribe(artistas => {
      console.log(artistas);
      this._spotify.artistas = artistas;
    });
  }

}
