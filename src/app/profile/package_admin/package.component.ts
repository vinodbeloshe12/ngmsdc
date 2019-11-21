import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/services/package.service';
declare var $: any

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  packages: any = [];
  packageData: any = {};
  isFormOpen: boolean = false;
  banner;
  image;
  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.getAllPAckages();
  }

  readUrl(event: any, type) {
    if (event.target.files && event.target.files[0]) {
      if (type == 1) {
        this.packageData.banner_image = event.target.files[0].name;
      } else {
        this.packageData.image = event.target.files[0].name;
      }
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        if (type == 1) {
          this.banner = (<FileReader>event.target).result;
        } else {
          this.image = (<FileReader>event.target).result;
        }
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  getAllPAckages() {
    this.packageService.getAllPackages().subscribe((res: any) => {
      if (res.value) {
        this.packages = res.data
      }
    })
  }

  submitPackage(data) {
    console.log("data", data);
  }

}
