import { Component, Input, OnInit } from '@angular/core';
import { Ville } from '../data/Ville';
import { CityService } from './city.service';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {

  @Input()  
  public ville: Ville;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getWeather(this.ville.nom).subscribe( fullData => {
      this.ville = fullData;
      console.log(fullData);
    })
  }

  fahrenheitToCelsius(f : number) {
      return ((f-32)/1.8).toFixed(2);
  }

}
