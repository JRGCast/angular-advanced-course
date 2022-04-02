import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit {

  @Input()
  icon: string;

  constructor() { }

  ngOnInit() {
  }

  get classes() {
     return this.icon ? `fa fa-${this.icon}` : 'fa'
  }
}
