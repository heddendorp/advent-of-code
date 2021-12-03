import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year2021',
  templateUrl: './year2021.component.html',
  styleUrls: ['./year2021.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Year2021Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
