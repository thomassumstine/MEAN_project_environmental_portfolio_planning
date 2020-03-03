import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-environmental-portfolio-plan',
  templateUrl: './new-environmental-portfolio-plan.component.html',
  styleUrls: ['./new-environmental-portfolio-plan.component.css']
})
export class NewEnvironmentalPortfolioPlanComponent implements OnInit {

  newEnvironmental_Portfolio_Plan = {
    name: '',
    description: '',
    notes: '',
    status: '',
    links: ''
  }

  errors: string[] = [];

  constructor(
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
  }

  handleSubmit() {
    this._httpService.createEnvironmental_Portfolio_Plan(this.newEnvironmental_Portfolio_Plan)
      .subscribe((data: any) => {

        if (data.hasOwnProperty('errors')) {
          // this is only set up for the create controller method currently
          // see edit component to see easier way of doing it
          this.errors = data.errors;
        }
        else {
          this._router.navigate(['/']);
        }
      })
  }

  handleCancel() {
    this._router.navigate(['/']);
  }
}