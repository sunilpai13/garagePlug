import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {GarageCarsServices} from '../../services/garage-cars.services';
import {InAppRoutes} from '../../core/app-constants';


@Component({
  selector: 'app-car-size',
  templateUrl: './car-size.component.html',
  styleUrls: ['./car-size.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarSizeComponent implements OnInit {
  carSizes = [];
  selectedCar = [];
  servicesData = [];
  selectedCarRoute = [];

  constructor(private carService: GarageCarsServices,
              private router: Router,
              private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      const currentNavigation = this.router.getCurrentNavigation().extras.state;
      if (currentNavigation && currentNavigation?.servicesData) {
        this.servicesData = currentNavigation.servicesData;
        this.selectedCarRoute = currentNavigation.carsData;
        this.selectedCar = this.selectedCarRoute;
      }
    });
  }

  ngOnInit(): void {
    this.carService.setCarSize();
    this.carSizes = this.carService.getCarSize();
    this.carSizes.forEach((element, index) => {
      if (this.selectedCarRoute.length > 0) {
        const selectedCar = this.selectedCarRoute.filter(ele => ele.id === element.id);
        if (selectedCar.length > 0) {
          this.carSizes[index] = selectedCar[0];
        }
      }
    });
  }

  onCardClick(value): void {
    if (this.selectedCar.length > 0) {
      this.selectedCar.filter(ele => Object.values(ele).includes(true)).forEach((obj, i) => {
        obj.index = i;
        obj.selected = false;
        this.selectedCar.splice(obj, 1);
      });
      this.selectedCar.push(value);
      value.selected = true;
    } else {
      this.selectedCar.push(value);
      value.selected = true;
    }
  }

  onButtonClick(): void {
    if (this.selectedCar.length > 0) {
      const navigationExtras: NavigationExtras = {
        state: {
          servicesData: this.servicesData,
          carsData: this.selectedCar
        }
      };
      this.router.navigate([InAppRoutes.PRICE], navigationExtras);
    } else {
      alert('Select a Car Size');
    }
  }
}

