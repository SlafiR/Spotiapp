import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService){

    this.loading = true;

    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      });
  }

  /* paises: any[] = [];

  -toda esta api fue para ejemplificar como hacer peticiones http.

  constructor(private http: HttpClient) {
    console.log('constructor del Home hecho');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((data: any) => {
        this.paises = data;
        console.log(data);
      })
   } */

}
