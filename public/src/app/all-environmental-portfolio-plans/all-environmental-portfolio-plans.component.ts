import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-environmental-portfolio-plans',
  templateUrl: './all-environmental-portfolio-plans.component.html',
  styleUrls: ['./all-environmental-portfolio-plans.component.css']
})
export class AllEnvironmentalPortfolioPlansComponent implements OnInit {

  environmental_portfolio_plans: any[] = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._httpService.getEnvironmental_Portfolio_Plans()
      .subscribe((data: any) => {
        this.environmental_portfolio_plans = data.environmental_portfolio_plans;
      });
  }

  editEnvironmental_Portfolio_Plan(environmental_portfolio_planId: string) {
    this._router.navigate(['/edit/', environmental_portfolio_planId]);
  }

  deleteEnvironmental_Portfolio_Plan(environmental_portfolio_planId: string) {
    this._httpService.deleteEnvironmental_Portfolio_Plan(environmental_portfolio_planId)
      .subscribe((data: any) => {

        for (let i = 0; i < this.environmental_portfolio_plans.length; i++) {
          if (this.environmental_portfolio_plans[i]._id === environmental_portfolio_planId) {
            return this.environmental_portfolio_plans.splice(i, 1);
          }
        }
      });
  }
}