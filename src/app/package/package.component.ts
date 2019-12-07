import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { PackageService } from '../services/package.service';
import { imgUrl } from '../app.constants';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  packageActivities = [];
  packageThingsToCarry = [];
  packageInclusions = [];
  package: any = {};
  packages = [{
    "name": "Economy",
    "duration": "2 Nights/ 3 Days",
    "location": "Tarkarli, Malvan",
    "price": "4,999 INR",
    "offer": "assets/images/band.png",
    "image": "assets/images/t5.png"
  }];
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private packageService: PackageService, private metaService: MetaService) { }

  ngOnInit() {
    this.galleryOptions = [{
      width: '100%',
      height: '450px',
      thumbnailsColumns: 6,
      imageAnimation: NgxGalleryAnimation.Slide
    },
    // max-width 800
    {
      breakpoint: 800,
      width: '100%',
      height: '300px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
    },
    // max-width 400
    {
      breakpoint: 400,
      preview: false
    }
    ];
    console.log("params", this.activatedRoute.snapshot.params.name);
    let fIndex = this.packages.findIndex(i => i.name == this.activatedRoute.snapshot.params.name);
    if (fIndex != -1) {
      this.packages.splice(fIndex, 1);
    }
    this.getPackageDetails(this.activatedRoute.snapshot.params.name);
  }

  changeRoute(packageDetail) {
    localStorage.setItem("selectedPackage", JSON.stringify(packageDetail));
    this.router.navigate(['package', packageDetail.name]);
    // this.ngOnInit();
  }

  navigateToBookNow(data) {
    localStorage.setItem('selectedPackage', JSON.stringify(data));
    localStorage.setItem('lastUrl', location.pathname);
    // this.router.navigate['booknow'];
    this.router.navigateByUrl('booknow');
  }

  getPackageDetails(name) {
    this.packageService.getPackageDetails(name).subscribe((res: any) => {
      console.log("res", res)
      this.package = res.details;
      this.loadMetaData(res.details);
      if (res.images && res.images.length > 0) {
        this.loadGallery(res.images, 1);
      } else {
        this.loadGallery(res.gallery, 2);
      }
      this.shuffle(this.galleryImages);
      this.packageActivities = res.details ? res.details.activities.includes(',') ? res.details.activities.split(',') : [] : [];
      this.packageThingsToCarry = res.details ? res.details.thingstocarry.includes(',') ? res.details.thingstocarry.split(',') : [] : [];
      this.packageInclusions = res.details ? res.details.inclusions.includes(',') ? res.details.inclusions.split(',') : [] : [];
    });
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  loadGallery(images, type) {
    let baseImgUrl = "";
    if (type == '1') {
      baseImgUrl = imgUrl;
    } else {
      baseImgUrl = "assets/images/package/";
    }
    this.galleryImages = [];
    images.forEach(element => {
      this.galleryImages.push(
        {
          small: baseImgUrl + element.image,
          medium: baseImgUrl + element.image,
          big: baseImgUrl + element.image,
          description: element.name
        }
      );
    });
  }


  loadMetaData(data) {
    this.metaService.setTitle(data.title);
    this.metaService.setTag('description', data.meta_description);
    this.metaService.setTag('keywords', data.meta_keywords);
  }

}
