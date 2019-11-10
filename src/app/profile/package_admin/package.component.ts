import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  packages: any = [];
  packageData: any = {};
  isFormOpen: boolean = false;
  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.getAllPAckages();
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
