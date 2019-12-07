import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MetaService } from './services/meta.service';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Malvan Tarkarli Tour Planner';

  constructor(private router: Router, private meta: MetaService) {
    this.loadAnalytics();
  }

  loadAnalytics() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).gtag('config', 'UA-154141202-1', { 'page_path': event.urlAfterRedirects });
        //set meta tags on route change
        this.onActivate(event.urlAfterRedirects);
      }

    });
  }

  onActivate(path) {
    console.log("in meta", path)
    // let path: any = location.pathname;
    var re = new RegExp("%20", 'g');
    if (path.includes('/package/') || path.includes('/details/')) {
      path = (path.substring(9, path.length)).replace(re, " ");
    }
    else if (path.includes('/blogdetails/')) {
      path = (path.substring(13, path.length)).replace(re, " ");
    } else {
      if (path.includes('/Content/')) {
        path = (path.replace(re, " ")).replace("/Content/", "");
      }
      else {
        path = (path.substring(1, 2)).toUpperCase() + path.substring(2, path.length);
      }
    }
    path = path.substring(path.indexOf('/') + 1, path.length);
    const sitename = "Malvan Tarkarli Tour Planner";
    this.meta.setTitle(path + ' | ' + sitename);
    this.meta.setTag('description', sitename + ' ' + path);
    this.meta.setTag('keywords', sitename + ' ' + path);
  }
}
