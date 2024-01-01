import {Component, OnInit} from '@angular/core';
import {
  NgIf,
  UpperCasePipe, NgForOf, Location,
} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Hero} from '../hero';
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import { HeroService } from '../hero.service';
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [
    FormsModule,
    UpperCasePipe,
    NgIf,
    NgForOf,
    HeroDetailComponent,
    RouterLink
  ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  goBack(): void {
    this.location.back();
  }
}
