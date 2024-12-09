import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-year2020',
    templateUrl: './year2020.component.html',
    styleUrls: ['./year2020.component.scss'],
    imports: [RouterLink, RouterLinkActive, RouterOutlet]
})
export class Year2020Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
