import {Component, Input} from '@angular/core';
import {Hero} from "../hero";
import {FormsModule} from "@angular/forms";
import {NgIf, UpperCasePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  standalone: true,
  imports: [
    FormsModule,
    UpperCasePipe,
    NgIf
  ],
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  @Input() hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
}
