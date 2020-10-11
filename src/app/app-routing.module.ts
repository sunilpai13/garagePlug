import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ServicesComponent} from './pages/services/services.component';
import {CarSizeComponent} from './pages/car-size/car-size.component';
import {PriceComponent} from './pages/price/price.component';
import {InAppRoutes} from './core/app-constants';
const routes: Routes = [
  {
    path: InAppRoutes.HOME,
    component: HomeComponent

  }, {
    path: InAppRoutes.SERVICES,
    component: ServicesComponent
  }, {
    path: InAppRoutes.CARSIZE,
    component: CarSizeComponent
  }, {
    path: InAppRoutes.PRICE,
    component: PriceComponent
  },


  {path: '', redirectTo: InAppRoutes.HOME, pathMatch: 'full'},
  {path: '**', redirectTo: InAppRoutes.HOME, pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
