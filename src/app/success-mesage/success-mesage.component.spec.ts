import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMesageComponent } from './success-mesage.component';

describe('SuccessMesageComponent', () => {
  let component: SuccessMesageComponent;
  let fixture: ComponentFixture<SuccessMesageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessMesageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessMesageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
