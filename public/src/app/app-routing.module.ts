import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewEnvironmentalPortfolioPlanComponent } from './new-environmental-portfolio-plan/new-environmental-portfolio-plan.component';
import { EditEnvironmentalPortfolioPlanComponent } from './edit-environmental-portfolio-plan/edit-environmental-portfolio-plan.component';
import { AllEnvironmentalPortfolioPlansComponent } from './all-environmental-portfolio-plans/all-environmental-portfolio-plans.component';


const routes: Routes = [
  {
    path: 'edit/:id',
    component: EditEnvironmentalPortfolioPlanComponent
  },
  {
    path: 'new',
    component: NewEnvironmentalPortfolioPlanComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: AllEnvironmentalPortfolioPlansComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }