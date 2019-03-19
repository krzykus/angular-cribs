import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crib } from '../crib';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribsData: Array<Crib>;
  constructor(private http: HttpClient) { }
    ngOnInit() {
	  this.http.get<Array<Crib>>('data/cribs.json')
	.subscribe(
	      data =>
	      this.cribsData= data
	      //console.log(data)
	      );
  }

}
