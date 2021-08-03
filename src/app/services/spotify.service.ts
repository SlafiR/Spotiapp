import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCPEdZYlinOfiL_kUC9ZkuSnU0iFpVZcw_iLGTI4wIqNkrCQD6HN9g1Tx-Xg3iuojd03dZFs4dTBumCHqM'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    /* const headers = new HttpHeaders({ aqui yace una obsoleta manera de hacer querys
      'Authorization': 'Bearer BQBwboTUq595oVR2OnRTxFSZ374quMoqwGpqVVXhlBdbNgs2Tg1nbmQjHPgpS61PAsHLp1BMBlqzxFT5FII'
    }); */

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data: any) => data['albums'].items));

    /* .subscribe(data => {
      console.log(data);
      }); */
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data['artists'].items));

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`)
       //.pipe(map((data: any) => data['artists'].items));

  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data: any) => data['tracks']));

  }

}
