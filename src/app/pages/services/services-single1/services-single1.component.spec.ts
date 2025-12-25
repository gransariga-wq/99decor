import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSingle1Component } from './services-single1.component';

describe('ServicesSingle1Component', () => {
  let component: ServicesSingle1Component;
  let fixture: ComponentFixture<ServicesSingle1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesSingle1Component]
    });
    fixture = TestBed.createComponent(ServicesSingle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
