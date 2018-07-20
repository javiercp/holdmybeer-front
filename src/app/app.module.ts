import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import {
  SharedModule,
  FooterComponent,
  HeaderComponent,
} from './shared';

import { CustomLazyAPIKeyLoader } from './core';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    rootRouting,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot(),
    NgxDatatableModule
  ],
  providers: [{ provide: MapsAPILoader, useClass: CustomLazyAPIKeyLoader }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
