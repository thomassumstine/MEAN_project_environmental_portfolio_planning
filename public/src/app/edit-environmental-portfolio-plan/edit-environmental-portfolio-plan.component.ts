import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-environmental-portfolio-plan',
  templateUrl: './edit-environmental-portfolio-plan.component.html',
  styleUrls: ['./edit-environmental-portfolio-plan.component.css']
})
export class EditEnvironmentalPortfolioPlanComponent implements OnInit {

  environmental_portfolio_planToEdit = null;
  errorMsg: string = '';

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this._activeRoute.params
      .subscribe((params: Params) => {

        this._httpService.getEnvironmental_Portfolio_Plan(params.id)
          .subscribe((data: any) => {

            this.environmental_portfolio_planToEdit = data.environmental_portfolio_plan;
          });
      });
  }

  handleSubmit() {
    this._httpService.updateEnvironmental_Portfolio_Plan(this.environmental_portfolio_planToEdit._id, this.environmental_portfolio_planToEdit)
      .subscribe((data: any) => {

        if (data.hasOwnProperty('errors')) {
          console.log(data.errors);

          this.errorMsg = data.errors.message;
        }
        else {
          this._router.navigate(['/']);
        }
      });
  }

  handleCancel() {
    this._router.navigate(['/']);
  }

}