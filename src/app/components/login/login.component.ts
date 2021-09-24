import { Component, OnInit } from '@angular/core';
import { Login } from "./../../models/login";
import { AuthService } from "./../../services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!: Login;

  constructor(private auth:AuthService) { 
    this.login = new Login();
  }

  ngOnInit(): void {
  }

  onSubmit(login: Login, modal:any){
    console.log(login);
    this.auth.login(login,modal);
  }

  public get isNotModify(): boolean {
    return this.login.loginName != '' && this.login.pass != '' && this.login.loginName != null && this.login.pass != null
  }
  
}
