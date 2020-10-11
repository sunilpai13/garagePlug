import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Output() result = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick($event): void {
    this.result.emit($event);
  }
}
