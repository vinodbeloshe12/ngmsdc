import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
packages=[{
  "name":"Economy",
  "duration":"2 Nights/ 3 Days",
  "location":"Tarkarli, Malvan",
  "price":"4,999 INR",
  "offer":"assets/images/band.png",
  "image":"assets/images/t5.png"
}
,{
  "name":"Deluxe",
  "duration":"4 Nights/ 5 Days",
  "location":"Tarkarli, Malvan",
  "price":"9,999 INR",
  "offer":"assets/images/band1.png",
  "image":"assets/images/t1.png"
}
,{
  "name":"Ultimate",
  "duration":"5 Nights/ 6 Days",
  "location":"Sindhudurga",
  "price":"12,999 INR",
  "offer":"",
  "image":"assets/images/t2.png"

}
]
  ngOnInit() {
  }

  changeRoute(packageDetail){
    localStorage.setItem("selectedPackage",JSON.stringify(packageDetail));
    // this.router.navigate(['package'])
    this.router.navigate(['package', packageDetail.name])
  }

}
