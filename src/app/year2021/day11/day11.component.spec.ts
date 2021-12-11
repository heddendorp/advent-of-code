import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day11Component } from './day11.component';

describe('Day11Component', () => {
  let component: Day11Component;
  let fixture: ComponentFixture<Day11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day11Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
