import {Component} from '@angular/core';
import {
  NgIf,
  UpperCasePipe, NgForOf,
} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";

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

export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
