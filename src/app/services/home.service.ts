import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl, httpOptionsPost } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getAllNavigation() {
    return this.http.get(apiUrl + "getNavigation");
  }

  public getHome() {
    return this.http.get(apiUrl + "getHome");
  }

  public bookNow(data) {
    return this.http.post(apiUrl + "bookNow", JSON.stringify(data), httpOptionsPost);
  }


}
