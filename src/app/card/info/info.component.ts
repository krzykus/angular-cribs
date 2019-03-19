import { Component, OnInit, Input } from '@angular/core';
import { Crib } from './../../crib';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() cardData: Crib;
  constructor() { }

  ngOnInit() {
  }

}
