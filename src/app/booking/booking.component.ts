import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  package: any = {};
  bookingData: any = {};
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.package = JSON.parse(localStorage.getItem("selectedPackage"));
    this.bookingData['package_name'] = this.package.web_title;
  }

  bookNow(data) {
    console.log("data", data);
    this.homeService.bookNow(data).subscribe((res: any) => {
      console.log("res", res.value);
      if (res.value) {
        let lastUrl = localStorage.getItem('lastUrl') ? localStorage.getItem('lastUrl') : '/home';
        this.router.navigateByUrl(lastUrl);
      }
    })
  }

}
