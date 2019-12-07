import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { imgUrl } from '../app.constants';
import { MetaService } from '../services/meta.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeData: any = {};
  imgUrl = imgUrl;
  constructor(private router: Router, private homeService: HomeService, private metaService: MetaService) { }

  ngOnInit() {
    this.getHome();
  }

  getHome() {
    this.homeService.getHome().subscribe((res: any) => {
      if (res.value) {
        this.homeData = res;
        console.log("homepage data", this.homeData);
        this.loadMetaData(res);
      }
    })
  }

  loadMetaData(data) {
    this.metaService.setTitle('Malvan Tarkarli Tour Planner | Homepage');
    this.metaService.setTag('description', 'Now plan your Malvan trip with Malvan Tarkarli Tour Planner, Malvan offers tourists a pleasant beach getaway that boasts historic sites and peaceful temples.');
    this.metaService.setTag('keywords', 'best places to visit in malvan, tarkarli , tour planner in malvan, malvantarkarlitourplanner, best places to visit in mumbai');
  }

  changeRoute(packageDetail) {
    this.router.navigate(['package', packageDetail.web_title])
  }

}
