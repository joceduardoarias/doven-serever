import { Component, OnInit } from '@angular/core';
import { Login } from "./../../models/login";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!: Login;

  constructor() { 
    this.login = new Login();
  }

  ngOnInit(): void {
  }

  onSubmit(login: Login, modal:any){
    console.log(login);
    
  }

  public get isNotModify(): boolean {
    return this.login.loginName != '' && this.login.pass != '' && this.login.loginName != null && this.login.pass != null
  }
  
}
