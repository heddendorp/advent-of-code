import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2022Component } from './year2022.component';

describe('Year2022Component', () => {
  let component: Year2022Component;
  let fixture: ComponentFixture<Year2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Year2022Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Year2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
