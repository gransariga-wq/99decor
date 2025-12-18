import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSingle2Component } from './portfolio-single-2.component';

describe('PortfolioSingle2Component', () => {
  let component: PortfolioSingle2Component;
  let fixture: ComponentFixture<PortfolioSingle2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioSingle2Component]
    });
    fixture = TestBed.createComponent(PortfolioSingle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
