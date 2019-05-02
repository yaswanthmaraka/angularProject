import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 username='dmantz' 
 password=''
 errorMessage ='Invalid Credentials'
 invalidLogin = false
 
 //Router
 //Dependency Injection
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { 

  }

  ngOnInit() {
  }
 handleLogin(){
  //console.log(this.username); 
  //console.log(this.password);
  
  //if(this.username === 'dmantz' && this.password === 'dummy'){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
    //Redirect To WelcomePage
    this.router.navigate(['welcome',this.username])
    this.invalidLogin=false
  } else {
    this.invalidLogin=true
  }

  }
}

