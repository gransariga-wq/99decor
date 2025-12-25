import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSingle2Component } from './services-single2.component';

describe('ServicesSingle2Component', () => {
  let component: ServicesSingle2Component;
  let fixture: ComponentFixture<ServicesSingle2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesSingle2Component]
    });
    fixture = TestBed.createComponent(ServicesSingle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
