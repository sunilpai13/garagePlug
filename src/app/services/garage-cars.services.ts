import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
// tslint:disable-next-line:class-name
export class GarageCarsServices {
  setCarSize(): any {

    const carSize = [{
      id: 1,
      name: 'Small',
      content: 'assets/images/small.png'
    }, {
      id: 2,
      name: 'Sedan',
      content: 'assets/images/sedan.png'
    }, {
      id: 3,
      name: 'Hatchback',
      content: 'assets/images/hatchback.png'
    }, {
      id: 4,
      name: 'Mini Van',
      content: 'assets/images/van.png'
    }, {
      id: 5,
      name: 'Super Car',
      content: 'assets/images/supercar.png'
    }, {
      id: 6,
      name: 'CUV',
      content: 'assets/images/cuv.png'
    }, {
      id: 7,
      name: 'Van',
      content: 'assets/images/minivan.png'
    }, {
      id: 8,
      name: 'Truck',
      content: 'assets/images/truck.png'
    }, {
      id: 9,
      name: 'SUV',
      content: 'assets/images/suv.png'
    }
    ];
    carSize.map((cars) => {
      cars[`selected`] = false;
    });
    localStorage.setItem('CARSIZE', JSON.stringify(carSize));
  }

  getCarSize(): [] {
    return JSON.parse(localStorage.getItem('CARSIZE'));
  }

}
