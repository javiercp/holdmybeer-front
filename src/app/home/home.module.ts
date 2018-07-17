import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SharedModule, WhoComponent, WhereComponent, MapComponent, WhatComponent } from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    WhoComponent,
    WhereComponent,
    WhatComponent,
    MapComponent,
  ]
})
export class HomeModule { }
