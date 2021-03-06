import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string){
    console.log(termino);
    this.loading = true;
    let context = this
    setTimeout(()=> {
      context.spotify.getArtistas(termino)
      .subscribe((data: any) => {
        console.log(data);
        context.artistas = data;
        context.loading = false;
      });
    },3000)
  }
}
