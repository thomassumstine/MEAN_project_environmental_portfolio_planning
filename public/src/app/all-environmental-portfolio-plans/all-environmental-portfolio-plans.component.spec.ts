import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEnvironmentalPortfolioPlansComponent } from './all-environmental-portfolio-plans.component';

describe('AllEnvironmentalPortfolioPlansComponent', () => {
  let component: AllEnvironmentalPortfolioPlansComponent;
  let fixture: ComponentFixture<AllEnvironmentalPortfolioPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEnvironmentalPortfolioPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEnvironmentalPortfolioPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
