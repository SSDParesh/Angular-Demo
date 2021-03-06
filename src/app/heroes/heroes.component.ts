import { Component, OnInit } from '@angular/core';
import {HEROS} from '../mock-herose';
import { Hero } from '../hero';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros=HEROS;
  constructor() { }

  ngOnInit(): void {
  }
  selectedHero:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
}
