import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio4columnComponent } from './portfolio4column.component';

describe('Portfolio4columnComponent', () => {
  let component: Portfolio4columnComponent;
  let fixture: ComponentFixture<Portfolio4columnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Portfolio4columnComponent]
    });
    fixture = TestBed.createComponent(Portfolio4columnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
