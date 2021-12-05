import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5Component } from './day5.component';

describe('Day5Component', () => {
  let component: Day5Component;
  let fixture: ComponentFixture<Day5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day5Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
