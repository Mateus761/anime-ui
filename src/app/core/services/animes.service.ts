import { Anime } from './../core/anime.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private http: HttpClient) { }

  public getAllAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(`${environment.animeUrl}/api/v1/animes/get`)
  }
}
