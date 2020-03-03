import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnvironmentalPortfolioPlanComponent } from './edit-environmental-portfolio-plan.component';

describe('EditEnvironmentalPortfolioPlanComponent', () => {
  let component: EditEnvironmentalPortfolioPlanComponent;
  let fixture: ComponentFixture<EditEnvironmentalPortfolioPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEnvironmentalPortfolioPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnvironmentalPortfolioPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
