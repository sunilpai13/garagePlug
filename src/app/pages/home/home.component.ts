import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {InAppRoutes} from '../../core/app-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onButtonClick(): void{
    this.router.navigate([InAppRoutes.SERVICES]);
  }
}
