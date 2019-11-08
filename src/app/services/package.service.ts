import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http:HttpClient) { }

  public getAllPackages(){
    return this.http.get(apiUrl + "getAllPackages");
  }
  public getPackageDetails(name){
    return this.http.get(apiUrl + "getPackageDetails?name="+name);
  }
}
