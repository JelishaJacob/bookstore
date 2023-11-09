import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  constructor(private rout:Router, private fb:FormBuilder,private bs:BookserviceService){}

  ngOnInit(): void {
  }

  userLoginForm=this.fb.group({
    email:[''],
    psw:['']
  })

  userLogin(){
    if(this.userLoginForm.valid){
      this.bs.userLoginApi(this.userLoginForm.value.email,this.userLoginForm.value.psw).subscribe({
        next:(result:any)=>{
          alert(result.message)
          this.rout.navigateByUrl("")
        },
        error:(result:any)=>{
          alert(result.error.message)
        }
      })
    }
    else{
      alert("Fill The Form")
    }
  }

  
}
