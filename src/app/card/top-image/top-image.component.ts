import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-image',
  templateUrl: './top-image.component.html',
  styleUrls: ['./top-image.component.css']
})
export class TopImageComponent implements OnInit {
  @Input() cardData;
  constructor() { }

  ngOnInit() {
  }

}
