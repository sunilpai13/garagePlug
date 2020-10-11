import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
