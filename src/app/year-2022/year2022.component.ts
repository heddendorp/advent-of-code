import {ChangeDetectionStrategy, Component} from '@angular/core';

import {RouterLink, RouterLinkActive, RouterOutlet,} from '@angular/router';

@Component({
  selector: 'app-year2022',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './year2022.component.html',
  styleUrls: ['./year2022.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Year2022Component {
}
