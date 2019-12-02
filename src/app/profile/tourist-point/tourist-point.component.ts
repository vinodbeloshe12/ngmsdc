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
  isEdit: boolean = false;
  banner;
  image;
  imageGallery;
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

  onFileChange(fileInput: any, type) {
    if (fileInput.srcElement && fileInput.srcElement.files[0]) {
      if (type == 1) {
        this.touristPointData.banner_image = fileInput.srcElement.files[0];
      } else {
        this.touristPointData.image = fileInput.srcElement.files[0];
      }
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        if (type == 1) {
          this.banner = (<FileReader>event.target).result;
        } else {
          this.image = (<FileReader>event.target).result;
        }
      }
      reader.readAsDataURL(fileInput.srcElement.files[0]);
    }
  }

  onFileChangeMultiple(fileInput: any) {
    this.imageGallery = [];
    let files = fileInput.srcElement.files;
    for (let i = 0; i < files.length; i++) {
      this.imageGallery.push(files[i]);
    }
  }

  editForm(id) {
    this.isEdit = true;
    this.gtTouristPoint(id);
  }

  gtTouristPoint(id) {
    this.touristpointService.getTouristPoint(id).subscribe((res: any) => {
      if (res.value) {
        this.touristPointData = res.data;
        this.isFormOpen = true;
      } else {
        alert(res.message);
      }
    });
  }

  deleteTouristPoint(id) {
    this.touristpointService.deleteTouristPoint(id).subscribe((res: any) => {
      if (res.value) {
        this.touristPointData = {};
        this.getAllTouristPoints();
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }

  submitTouristPoint(data) {
    console.log("data", data);
    data.image_gallery = this.imageGallery;
    this.touristpointService.createTouristPoint(data).subscribe((res: any) => {
      if (res.value) {
        console.log(res.message);
        this.touristPointData = {};
        this.isFormOpen = false;
        this.getAllTouristPoints();
        alert(res.message);
      } else {
        alert(res.message);
      }
    })
  }

}
