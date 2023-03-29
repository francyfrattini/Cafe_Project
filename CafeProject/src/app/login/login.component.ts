import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj: any = {
    userName: '',
    password:''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){

    if(this.loginObj.userName == 'admin' && this.loginObj.password =='admin') {
      localStorage.setItem('role','admin');
      this.router.navigateByUrl('admin');
    } 
  }

}
