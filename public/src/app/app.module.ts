import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewEnvironmentalPortfolioPlanComponent } from './new-environmental-portfolio-plan/new-environmental-portfolio-plan.component';
import { EditEnvironmentalPortfolioPlanComponent } from './edit-environmental-portfolio-plan/edit-environmental-portfolio-plan.component';
import { AllEnvironmentalPortfolioPlansComponent } from './all-environmental-portfolio-plans/all-environmental-portfolio-plans.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    NewEnvironmentalPortfolioPlanComponent,
    EditEnvironmentalPortfolioPlanComponent,
    AllEnvironmentalPortfolioPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
