import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '2021',
    loadChildren: () =>
      import('./year2021/year2021.module').then((m) => m.Year2021Module),
  },
  {
    path: '2020',
    loadChildren: () =>
      import('./year2020/year2020.module').then((m) => m.Year2020Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
