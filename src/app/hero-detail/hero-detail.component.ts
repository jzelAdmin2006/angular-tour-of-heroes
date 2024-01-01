import {Component, Input} from '@angular/core';
import {Hero} from "../hero";
import {FormsModule} from "@angular/forms";
import {NgIf, UpperCasePipe} from "@angular/common";

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
  @Input() hero?: Hero;
}
