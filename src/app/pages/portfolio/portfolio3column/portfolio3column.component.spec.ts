import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio3columnComponent } from './portfolio3column.component';

describe('Portfolio3columnComponent', () => {
  let component: Portfolio3columnComponent;
  let fixture: ComponentFixture<Portfolio3columnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Portfolio3columnComponent]
    });
    fixture = TestBed.createComponent(Portfolio3columnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
