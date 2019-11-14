import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';
import {
  PackageService
} from '../services/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
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

    this.galleryImages = [{
      small: 'assets/images/gallery/t1.jpg',
      medium: 'assets/images/gallery/t1.jpg',
      big: 'assets/images/gallery/t1.jpg'
    },
    {
      small: 'assets/images/gallery/t2.jpg',
      medium: 'assets/images/gallery/t2.jpg',
      big: 'assets/images/gallery/t2.jpg'
    },
    {
      small: 'assets/images/gallery/t3.jpg',
      medium: 'assets/images/gallery/t3.jpg',
      big: 'assets/images/gallery/t3.jpg'
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
    });
  }

}
