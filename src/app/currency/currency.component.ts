import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currecies;
  countries;
  name;

  keys = Object.keys;

  currenciesKeysValues;
  countriesKeysValues;

  constructor(private currencyService: ApiService) {
    this.getAllCurrecy();
  }

  ngOnInit() {
  }

  getAllCurrecy() {
    this.currencyService.getAllCurrencies().subscribe(res => {
      this.currecies = res
    }, err => {
      console.log(err)
    })
  }

  currencyChanged(index) {
    var i = index.target.value;
    var currencies =this.currecies[i].Name;
    var countries =this.currecies[i].Countries;

    this.currenciesKeysValues = Object.keys(currencies).map((elm) => ({
      [elm]: currencies[elm]
    }));

    this.countriesKeysValues = [];
    
    countries.forEach((element) => {
      this.countriesKeysValues.push(Object.keys(element).map((elm) => ({
        [elm]: element[elm]
      })))
    });
    
      console.log(this.currenciesKeysValues);
      console.log(this.countriesKeysValues);
    
  }

}
