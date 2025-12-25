import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSingle4Component } from './services-single4.component';

describe('ServicesSingle4Component', () => {
  let component: ServicesSingle4Component;
  let fixture: ComponentFixture<ServicesSingle4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesSingle4Component]
    });
    fixture = TestBed.createComponent(ServicesSingle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
