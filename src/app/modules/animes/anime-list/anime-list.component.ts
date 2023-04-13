import { AnimesService } from './../../../core/services/animes.service';
import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/core/core/anime.model';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {

  animes!: Anime[]

  constructor(private animeService: AnimesService) { }

  ngOnInit(): void {
    this.getAnimes()
  }

  getAnimes() {
    this.animeService.getAllAnimes().subscribe(allAnimes => this.animes = allAnimes)
  }

}
