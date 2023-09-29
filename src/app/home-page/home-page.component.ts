import { Component, OnInit } from '@angular/core';
import { Ville } from '../data/Ville';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public villeAdd: string;
  public listeVilles: Ville[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public ajoutVille() {
    this.listeVilles.push({ nom: this.villeAdd });
    this.villeAdd = '';
    console.log(this.listeVilles);
  }

}
