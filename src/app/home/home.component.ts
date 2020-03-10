import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { MetaService } from '../services/meta.service';
import { HomeService } from '../services/home.service';
import { imgUrl } from '../app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  homeData: any = {};
  imgUrl = imgUrl;
  constructor(private router: Router, private homeService: HomeService, private metaService: MetaService) { }

  ngOnInit() {
    this.galleryOptions = [{
      width: '100%',
      height: '450px',
      thumbnails: false,
      imageAutoPlay: true,
      imageAutoPlayInterval: 6000,
      imageAnimation: NgxGalleryAnimation.Zoom,
      preview: false
    },
    // max-width 800
    {
      breakpoint: 800,
      width: '100%',
      height: '300px',
      imagePercent: 100,
      thumbnails: false,
      imageAutoPlay: true,
      imageAutoPlayInterval: 6000,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
    },
    // max-width 400
    {
      breakpoint: 400,
      preview: false
    }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/gallery/s1.jpg',
        medium: 'assets/images/gallery/s1.jpg',
        big: 'assets/images/gallery/s1.jpg'
      },
      {
        small: 'assets/images/gallery/s2.jpg',
        medium: 'assets/images/gallery/s2.jpg',
        big: 'assets/images/gallery/s2.jpg'
      }
    ];
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
    this.metaService.setTag('keywords', 'best places to visit in malvan, tarkarli , tour planner in malvan, malvantarkarlitourplanner,Tarkarli beach activities,Tarkarli beach scuba diving,Tarkarli,Malvan,Malvan beach,Package,Watersports in Tarkarli,Watersports in malvan,Tarkarli watersports,Malvan trip');
  }

  changeRoute(packageDetail) {
    this.router.navigate(['package', packageDetail.web_title])
  }

}
