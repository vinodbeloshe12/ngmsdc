import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
package:any={};
packages=[{
  "name":"Economy",
  "duration":"2 Nights/ 3 Days",
  "location":"Tarkarli, Malvan",
  "price":"4,999 INR",
  "offer":"assets/images/band.png",
  "image":"assets/images/t5.png"
}
,{
  "name":"Deluxe",
  "duration":"4 Nights/ 5 Days",
  "location":"Tarkarli, Malvan",
  "price":"9,999 INR",
  "offer":"assets/images/band1.png",
  "image":"assets/images/t1.png"
}
,{
  "name":"Ultimate",
  "duration":"5 Nights/ 6 Days",
  "location":"Sindhudurga",
  "price":"12,999 INR",
  "offer":"",
  "image":"assets/images/t2.png"

}
];
  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.galleryOptions = [
      {
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

  this.galleryImages = [
      {
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

   console.log("params",this.activatedRoute.snapshot.params.name);
   let fIndex= this.packages.findIndex(i=> i.name==this.activatedRoute.snapshot.params.name);
   if(fIndex!=-1){
     this.packages.splice(fIndex,1);
   }
   this.package = JSON.parse(localStorage.getItem("selectedPackage"));
  }

  changeRoute(packageDetail){
    localStorage.setItem("selectedPackage",JSON.stringify(packageDetail));
    this.router.navigate(['package', packageDetail.name]);
    this.ngOnInit();
  }

}
