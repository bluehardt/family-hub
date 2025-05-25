import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LegoHomeComponent } from './lego/lego-home/lego-home.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pl' },
  {
    path: ':lang',
    title: 'lang',
    children: [
      {
        path: 'home',
        title: $localize`Home`,
        component: AppComponent,
        data: {
          sidenav: false,
        },
      },
      {
        path: 'lego',
        title: $localize`LEGO`,
        component: LegoHomeComponent,
        data: {
          sidenav: true,
          disabled: false,
        },
        children: [
          {
            path: 'instructions',
            title: $localize`Instructions`,
            component: LegoHomeComponent,
            data: {
              sidenav: false,
              disabled: false,
            },
          },
          {
            path: 'owned',
            title: $localize`Owned`,
            component: LegoHomeComponent,
            data: {
              sidenav: false,
              disabled: true,
            },
          },
        ],
      },
      {
        path: 'games',
        title: $localize`Games`,
        component: LegoHomeComponent,
        data: {
          sidenav: false,
          disabled: true,
        },
      },
      {
        path: 'points',
        title: $localize`Points`,
        component: LegoHomeComponent,
        data: {
          sidenav: false,
          disabled: true,
        },
      },
      {
        path: 'profile',
        title: $localize`Profiles`,
        component: LegoHomeComponent,
        data: {
          sidenav: false,
          disabled: true,
        },
      },
      {
        path: 'profile/:id',
        title: $localize`Profile`,
        component: LegoHomeComponent,
        data: {
          sidenav: false,
          disabled: true,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
