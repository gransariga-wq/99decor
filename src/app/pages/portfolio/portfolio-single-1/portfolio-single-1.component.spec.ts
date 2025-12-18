import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSingle1Component } from './portfolio-single-1.component';

describe('PortfolioSingle1Component', () => {
  let component: PortfolioSingle1Component;
  let fixture: ComponentFixture<PortfolioSingle1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioSingle1Component]
    });
    fixture = TestBed.createComponent(PortfolioSingle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
