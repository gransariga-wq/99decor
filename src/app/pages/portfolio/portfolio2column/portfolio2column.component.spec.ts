import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio2columnComponent } from './portfolio2column.component';

describe('Portfolio2columnComponent', () => {
  let component: Portfolio2columnComponent;
  let fixture: ComponentFixture<Portfolio2columnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Portfolio2columnComponent]
    });
    fixture = TestBed.createComponent(Portfolio2columnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
