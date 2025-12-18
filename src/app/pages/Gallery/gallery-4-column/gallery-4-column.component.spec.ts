import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery4ColumnComponent } from './gallery-4-column.component';

describe('Gallery4ColumnComponent', () => {
  let component: Gallery4ColumnComponent;
  let fixture: ComponentFixture<Gallery4ColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gallery4ColumnComponent]
    });
    fixture = TestBed.createComponent(Gallery4ColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
