import { Component, OnInit } from '@angular/core';
import { TouristPointService } from 'src/app/services/tourist-point.service';

@Component({
  selector: 'app-tourist-point',
  templateUrl: './tourist-point.component.html',
  styleUrls: ['./tourist-point.component.css']
})
export class TouristPointComponent implements OnInit {
  touristPoints: any = [];
  touristPointData: any = {};
  isFormOpen: boolean = false;
  banner;
  image;
  constructor(private touristpointService: TouristPointService) { }

  ngOnInit() {
    this.getAllTouristPoints();
  }

  getAllTouristPoints() {
    this.touristpointService.getAllTouristPoints().subscribe((res: any) => {
      if (res.value) {
        this.touristPoints = res.data;
      }
    });
  }

  readUrl(event: any, type) {
    if (event.target.files && event.target.files[0]) {
      if (type == 1) {
        this.touristPointData.banner_image = event.target.files[0].name;
      } else {
        this.touristPointData.image = event.target.files[0].name;
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

  submitTouristPoint(data) {
    console.log("data", data);
    data.image = this.image;
    data.banner_image = this.banner;
    this.touristpointService.createTouristPoint(data).subscribe((res: any) => {
      if (res.value) {
        console.log(res.message);
      }
    })
  }

}
