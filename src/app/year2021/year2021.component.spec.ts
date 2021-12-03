import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2021Component } from './year2021.component';

describe('Year2021Component', () => {
  let component: Year2021Component;
  let fixture: ComponentFixture<Year2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Year2021Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Year2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
