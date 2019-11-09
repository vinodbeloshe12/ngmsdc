import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeData: any = {};
  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.getHome();
  }

  getHome() {
    this.homeService.getHome().subscribe((res: any) => {
      if (res.value) {
        this.homeData = res;
        console.log("homepage data", this.homeData);
      }
    })
  }

  changeRoute(packageDetail) {
    this.router.navigate(['package', packageDetail.web_title])
  }

}
