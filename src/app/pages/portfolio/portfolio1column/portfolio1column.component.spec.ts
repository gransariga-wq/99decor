import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio1columnComponent } from './portfolio1column.component';

describe('Portfolio1columnComponent', () => {
  let component: Portfolio1columnComponent;
  let fixture: ComponentFixture<Portfolio1columnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Portfolio1columnComponent]
    });
    fixture = TestBed.createComponent(Portfolio1columnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
