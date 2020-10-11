import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
// tslint:disable-next-line:class-name
export class GarageService {
  setServices(): any {

    const services = [{
      id: 1,
      name: 'Wash',
      content: '../assets/images/wash.png'
    }, {
      id: 2,
      name: 'Towing',
      content: '../assets/images/towing.png'
    }, {
      id: 3,
      name: 'Electric',
      content: '../assets/images/electric.png'
    }, {
      id: 4,
      name: 'Paint',
      content: '../assets/images/paint.png'
    }, {
      id: 5,
      name: 'Engine',
      content: '../assets/images/engine.png'
    }, {
      id: 6,
      name: 'Wheel Alignment',
      content: '../assets/images/wheel_align.png'
    }, {
      id: 7,
      name: 'Tyres',
      content: '../assets/images/tires.png'
    }, {
      id: 8,
      name: 'Oil & Repair',
      content: '../assets/images/car_service1.png'
    }, {
      id: 9,
      name: 'Resale',
      content: '../assets/images/resale.png'
    }
    ];
    services.map((service) => {
      service[`selected`] = false;
    });
    localStorage.setItem('SERVICES', JSON.stringify(services));
  }

  getServices(): [] {
    return JSON.parse(localStorage.getItem('SERVICES'));
  }

}
