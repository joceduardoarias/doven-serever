import { Injectable } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Login } from "./../models/login";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { environment } from "./../../environments/environment";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  closeResult = '';

  constructor(private router: Router, private modalService: NgbModal) { }

  login(login:Login, modal:any) {
    if (login.loginName === null || login.pass === null) {
      return;
    }
      var firebase = environment.firebaseConfig;
      var auth = getAuth(firebase);

       signInWithEmailAndPassword(auth,login.loginName,login.pass).then(res=>{
        console.log("Usuario: ",login.loginName);
        // this.router.navigateByUrl('/home');
      }).catch(error=>{
        console.log(error.message);
        this.UserExist(modal);
      });

    
  }

  loginRequest(login:Login){
    //Aqui se debe consumir la api de back end
   
   
  }

  UserExist(modal:any){
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
}

