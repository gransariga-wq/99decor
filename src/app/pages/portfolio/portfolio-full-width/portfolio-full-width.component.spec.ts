import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFullWidthComponent } from './portfolio-full-width.component';

describe('PortfolioFullWidthComponent', () => {
  let component: PortfolioFullWidthComponent;
  let fixture: ComponentFixture<PortfolioFullWidthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioFullWidthComponent]
    });
    fixture = TestBed.createComponent(PortfolioFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
