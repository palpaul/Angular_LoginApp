import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService ) { }

  credentials={
    username:"",
    password:""
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Form is submitted");
    console.log(this.credentials)
    if(this.credentials.username!=""||this.credentials.username!="" && this.credentials.username!=null||this.credentials.username!=null){
      // calling service and service will return obserables so we must have to subsribe it okk
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //success
           console.log(response.token); 
           this.loginService.loginUser(response.token); 
           window.location.href="/dashboard";
        },
        error=>{
          //error
        console.log(error);
        
          
        }


      )
    }else
    alert("Please enter username and password");
  }
}
