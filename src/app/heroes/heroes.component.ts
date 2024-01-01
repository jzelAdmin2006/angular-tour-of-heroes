import {Component, OnInit} from '@angular/core';
import {
  NgIf,
  UpperCasePipe, NgForOf,
} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Hero} from '../hero';
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import { HeroService } from '../hero.service';
import {MessageService} from "../message.service";

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
    HeroDetailComponent
  ]
})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  heroes: Hero[] = [];
  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
