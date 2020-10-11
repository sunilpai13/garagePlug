import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ButtonComponent } from './components/button/button.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarSizeComponent } from './pages/car-size/car-size.component';
import { PriceComponent } from './pages/price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ButtonComponent,
    TopBannerComponent,
    CardsComponent,
    CarSizeComponent,
    PriceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
