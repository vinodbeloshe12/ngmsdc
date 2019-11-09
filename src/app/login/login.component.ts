import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any = {};
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(data) {
    console.log("daata", data)
    this.loginService.login(data).subscribe((res: any) => {
      if (res.value) {
        localStorage.setItem('userData', JSON.stringify(res.data));
        location.href = '/home';
      }
      else {
        alert("please enter valid username and password");
      }

    }, error => console.log(error));
  }


}
