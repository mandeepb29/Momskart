import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPolicyComponent } from './our-policy.component';

describe('OurPolicyComponent', () => {
  let component: OurPolicyComponent;
  let fixture: ComponentFixture<OurPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
