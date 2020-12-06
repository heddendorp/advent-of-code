import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6Component } from './day6.component';

describe('Day6Component', () => {
  let component: Day6Component;
  let fixture: ComponentFixture<Day6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day6Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
