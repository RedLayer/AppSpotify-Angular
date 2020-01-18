import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
interface Artistas {
  artists: {items: []};
}


@Injectable({
  providedIn: 'root'
})


export class SpotifyService {
  artistas: [];
  urlSpotify = 'https://api.spotify.com/v1';
  token = 'BQBRrtk2CiG7M5JiclAVtq7xxgkXcd08zm29-2iDVb8CTpXLuGND69629pwuqyTcGRvRchcySOP7RW4AdQU';

  constructor(public http: HttpClient) {
    console.log('Servicio Spotify Listo');
  }

  getArtistas(termino: string) {
    console.log('a por artistas');
    const url = `${this.urlSpotify}/search?query=${termino}&type=artist&market=US&limit=20`;
    const headers = new HttpHeaders({
      authorization: 'Bearer ' + this.token
    });

    return this.http.get(url, {headers}).pipe(
      map((resp: Artistas)  => {
        console.log(resp);
        return resp.artists.items;
      })
    );


  }
  getArtista(id: string) {
    const url = `${this.urlSpotify}/artists/${id}`;
    const headers = new HttpHeaders({
      authorization: 'Bearer ' + this.token
    });

    return this.http.get(url, {headers}).pipe(
      map((resp: Artistas)  => {
        return resp;
      })
    );

  }
  getTop(id: string) {
    const url = `${this.urlSpotify}/artists/${id}/top-tracks?country=US`;
    const headers = new HttpHeaders({
      authorization: 'Bearer ' + this.token
    });

    return this.http.get(url, {headers}).pipe(
      map((resp: Artistas)  => {
        return resp;
      })
    );
  }
}
