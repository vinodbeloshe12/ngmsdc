import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigationData: any = []
  isMenuOpen: boolean = false;
  userData: any = {};
  constructor(private homeService: HomeService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.getAllNavigation();
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  getAllNavigation() {
    this.homeService.getAllNavigation().subscribe((res: any) => {
      if (res.value) {
        this.navigationData = res.data;
        console.log("this.navigationData", this.navigationData);
      }
    })
  }


  logout() {
    this.loginService.logout().subscribe((res: any) => {
      if (res.value) {
        localStorage.removeItem("userData");
        this.userData = undefined;
        this.router.navigateByUrl("/home");
      }
    }, err => console.log(err));
  }
}
