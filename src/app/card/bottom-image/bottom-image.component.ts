import { Component, OnInit, Input } from '@angular/core';
import { Crib } from './../../crib';

@Component({
  selector: 'app-bottom-image',
  templateUrl: './bottom-image.component.html',
  styleUrls: ['./bottom-image.component.css']
})
export class BottomImageComponent implements OnInit {
  @Input() cardData: Crib;
  constructor() { }

  ngOnInit() {
  }

}
