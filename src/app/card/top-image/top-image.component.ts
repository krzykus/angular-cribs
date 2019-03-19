import { Component, OnInit, Input } from '@angular/core';
import { Crib } from './../../crib';

@Component({
  selector: 'app-top-image',
  templateUrl: './top-image.component.html',
  styleUrls: ['./top-image.component.css']
})
export class TopImageComponent implements OnInit {
  @Input() cardData: Crib;
  constructor() { }

  ngOnInit() {
  }

}
