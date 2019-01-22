import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint = 'http://chehir.tn:3000/currencies';
  currencies ;

  constructor(private http: HttpClient) { }

  getAllCurrencies() {
    return this.http.get(this.endpoint);
  }



}
