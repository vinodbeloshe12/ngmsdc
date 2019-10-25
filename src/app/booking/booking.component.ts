import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
package:any={};
  constructor() { }

  ngOnInit() {
    this.package = JSON.parse(localStorage.getItem("selectedPackage"));
  }

}
