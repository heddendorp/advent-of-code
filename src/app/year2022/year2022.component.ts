import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  Routes,
} from '@angular/router';

@Component({
  selector: 'app-year2022',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './year2022.component.html',
  styleUrls: ['./year2022.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Year2022Component {}

export const routes: Routes = [
  {
    path: '',
    component: Year2022Component,
    children: [
      { path: '', redirectTo: '1', pathMatch: 'full' },
      {
        path: '1',
        loadComponent: () =>
          import('./day1/day1.component').then((mod) => mod.Day1Component),
      },
      {
        path: '2',
        loadComponent: () =>
          import('./day2/day2.component').then((mod) => mod.Day2Component),
      },
    ],
  },
];
