import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }


  getEnvironmental_Portfolio_Plans() {
    // longform
    const observable = this._http.get('/api/environmental_portfolio_plans');
    return observable;
  }

  getEnvironmental_Portfolio_Plan(id) {
    return this._http.get('/api/environmental_portfolio_plans/' + id);
  }

  createEnvironmental_Portfolio_Plan(newEnvironmental_Portfolio_Plan) {
    return this._http.post('/api/environmental_portfolio_plans', newEnvironmental_Portfolio_Plan);
  }

  updateEnvironmental_Portfolio_Plan(id, editedEnvironmental_Portfolio_Plan) {
    return this._http.put('/api/environmental_portfolio_plans/' + id, editedEnvironmental_Portfolio_Plan);
  }

  deleteEnvironmental_Portfolio_Plan(id) {
    return this._http.delete('/api/environmental_portfolio_plans/' + id);
  }
}