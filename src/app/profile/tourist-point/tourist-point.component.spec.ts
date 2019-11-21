import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristPointComponent } from './tourist-point.component';

describe('TouristPointComponent', () => {
  let component: TouristPointComponent;
  let fixture: ComponentFixture<TouristPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
