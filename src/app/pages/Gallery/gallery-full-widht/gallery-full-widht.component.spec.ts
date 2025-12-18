import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFullWidhtComponent } from './gallery-full-widht.component';

describe('GalleryFullWidhtComponent', () => {
  let component: GalleryFullWidhtComponent;
  let fixture: ComponentFixture<GalleryFullWidhtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryFullWidhtComponent]
    });
    fixture = TestBed.createComponent(GalleryFullWidhtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
