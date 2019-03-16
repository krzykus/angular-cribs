import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-image',
  templateUrl: './bottom-image.component.html',
  styleUrls: ['./bottom-image.component.css']
})
export class BottomImageComponent implements OnInit {
  @Input() cardData;
  constructor() { }

  ngOnInit() {
  }

}
