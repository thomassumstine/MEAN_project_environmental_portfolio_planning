import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnvironmentalPortfolioPlanComponent } from './new-environmental-portfolio-plan.component';

describe('NewEnvironmentalPortfolioPlanComponent', () => {
  let component: NewEnvironmentalPortfolioPlanComponent;
  let fixture: ComponentFixture<NewEnvironmentalPortfolioPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEnvironmentalPortfolioPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEnvironmentalPortfolioPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
