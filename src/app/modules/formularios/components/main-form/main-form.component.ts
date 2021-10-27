import { Component, OnInit } from '@angular/core';
import {Hero} from "../../models/hero";

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.sass']
})
export class MainFormComponent implements OnInit {
  public model: Hero;
  public powers: string[] =  ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  heroes: Hero[] = [];

  constructor() {
    this.model = new Hero(0,"",this.powers[0],"");
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
    this.heroes.push(new Hero(0,this.model.name, this.model.power, this.model.alterEgo));
    this.model = new Hero();
  }
}
