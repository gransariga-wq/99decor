import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2ColumnComponent } from './gallery-2-column.component';

describe('Gallery2ColumnComponent', () => {
  let component: Gallery2ColumnComponent;
  let fixture: ComponentFixture<Gallery2ColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gallery2ColumnComponent]
    });
    fixture = TestBed.createComponent(Gallery2ColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
