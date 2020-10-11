import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GarageService} from '../../services/garage-service.services';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {InAppRoutes} from '../../core/app-constants';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent implements OnInit {
  availServices = [];
  selectedService = [];
  routeData = [];
  carsData = [];

  constructor(private garageService: GarageService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const currentNavigation = this.router.getCurrentNavigation().extras.state;
      if (currentNavigation && currentNavigation?.servicesData && currentNavigation?.carsData) {
        this.routeData = currentNavigation.servicesData;
        this.selectedService = this.routeData;
        this.carsData = currentNavigation.carsData;
      }
    });
  }

  ngOnInit(): void {
    this.garageService.setServices();
    this.availServices = this.garageService.getServices();

    this.availServices.forEach((element, index) => {
      if (this.routeData.length > 0) {
        const filterServices = this.routeData.filter(ele => ele.id === element.id);
        if (filterServices.length > 0) {
          this.availServices[index] = filterServices[0];
        }
      }
    });
  }

  onCardClick(value): void {
    if (this.selectedService.length > 0) {
      const filterData = this.selectedService.filter(ele => ele.id === value.id);
      if (filterData.length === 0) {
        this.selectedService.push(value);
        value.selected = true;
      } else {
        const serviceIndex = this.selectedService.indexOf(value);
        this.selectedService.splice(serviceIndex, 1);
        value.selected = false;
      }
    } else {
      this.selectedService.push(value);
      value.selected = true;
    }
  }

  onButtonClick(): void {
    if (this.selectedService.length > 0) {
      const navigationExtras: NavigationExtras = {
        state: {
          servicesData: this.selectedService,
          carsData: this.carsData
        }
      };
      this.router.navigate([InAppRoutes.CARSIZE], navigationExtras);
    } else {
      alert('Select a service');
    }
  }
}

