import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { apiUrl, httpOptionsPost, httpOptionsAdmin, httpOptionsGet } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TouristPointService {
  constructor(private http: HttpClient) {
  }

  createTouristPoint(data) {
    console.log("data", data)
    let body = new FormData();
    if (data.id) {
      body.append("id", data.id);
    }

    body.append('title', data.title);
    body.append('web_title', data.web_title);
    body.append('description', data.description);
    body.append('meta_title', data.meta_title);
    body.append('meta_keywords', data.meta_keywords);
    body.append('meta_description', data.meta_description);
    body.append('banner_image', data.banner_image);
    body.append('image', data.image);
    body.append('status', data.status);
    if (data.image_gallery) {
      for (let i = 0; i < data.image_gallery.length; i++) {
        body.append("image_name[]", data.image_gallery[i], data.image_gallery[i]['name']);
      }
    }
    return this.http.post(apiUrl + "createTouristPoint", body, httpOptionsAdmin);
  }

  getAllTouristPoints() {
    return this.http.get(apiUrl + 'getAllTouristPoints');
  }

  deleteTouristPoint(id) {
    return this.http.get(apiUrl + 'deleteTouristPoint?id=' + id);
  }
  getTouristPoint(id) {
    return this.http.get(apiUrl + 'getTouristPoint?id=' + id);
  }
}
