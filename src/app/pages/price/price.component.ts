import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PriceComponent implements OnInit {
  servicesData = [];
  carsData = [];

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const currentNavigation = this.router.getCurrentNavigation().extras.state;
      if (currentNavigation && currentNavigation.servicesData && currentNavigation.carsData) {
        this.servicesData = currentNavigation.servicesData;
        this.carsData = currentNavigation.carsData;
      }
    });
  }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    if (this.servicesData.length > 0) {
      const navigationExtras: NavigationExtras = {
        state: {
          servicesData: this.servicesData,
          carsData: this.carsData
        }
      };
      this.router.navigate(['/services'], navigationExtras);
    }
  }

}
