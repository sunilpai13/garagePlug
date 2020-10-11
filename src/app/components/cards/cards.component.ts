import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardsComponent implements OnInit {
  @Input() cardSubText;
  @Input() cardContent;
  @Output() cardClick = new EventEmitter();
  @Input() cardSelected;
  constructor() { }

  ngOnInit(): void {
  }

  onCardClick($event): void{
    this.cardClick.emit($event);
  }
}
