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
    body.append('meta_keywords', data.meta_keywords);
    body.append('meta_description', data.meta_description);
    body.append('banner_image', data.banner_image);
    body.append('image', data.image);
    body.append('status', data.status);
    return this.http.post(apiUrl + "createTouristPoint", body, httpOptionsAdmin);
  }

  getAllTouristPoints() {
    return this.http.get(apiUrl + 'getAllTouristPoints');
  }
}
