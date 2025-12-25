import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSingle3Component } from './services-single3.component';

describe('ServicesSingle3Component', () => {
  let component: ServicesSingle3Component;
  let fixture: ComponentFixture<ServicesSingle3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesSingle3Component]
    });
    fixture = TestBed.createComponent(ServicesSingle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
