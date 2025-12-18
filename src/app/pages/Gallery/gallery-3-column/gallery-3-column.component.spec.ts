import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery3ColumnComponent } from './gallery-3-column.component';

describe('Gallery3ColumnComponent', () => {
  let component: Gallery3ColumnComponent;
  let fixture: ComponentFixture<Gallery3ColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gallery3ColumnComponent]
    });
    fixture = TestBed.createComponent(Gallery3ColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
