import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { PackageService } from '../services/package.service';

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
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private packageService: PackageService) { }

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
    this.ngOnInit();
  }

  getPackageDetails(name) {
    this.packageService.getPackageDetails(name).subscribe((res: any) => {
      console.log("res", res)
      this.package = res.details;
      this.loadGallery(res.images);
      this.shuffle(this.galleryImages);
      this.packageActivities = res.details ? res.details.activities.includes(',') ? res.details.activities.split(',') : [] : [];
      this.packageThingsToCarry = res.details ? res.details.thingstocarry.includes(',') ? res.details.thingstocarry.split(',') : [] : [];
      this.packageInclusions = res.details ? res.details.inclusions.includes(',') ? res.details.inclusions.split(',') : [] : [];
    });
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  loadGallery(images) {
    this.galleryImages = [];
    images.forEach(element => {
      this.galleryImages.push(
        {
          small: 'assets/images/package/' + element.image,
          medium: 'assets/images/package/' + element.image,
          big: 'assets/images/package/' + element.image,
          description: element.name
        }
      );
    });
  }

}
