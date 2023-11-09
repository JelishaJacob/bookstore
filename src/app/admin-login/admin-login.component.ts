import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{

  constructor(private rout:Router, private fb:FormBuilder, private bs:BookserviceService){}

  ngOnInit(): void {
  }

  adminLoginForm=this.fb.group({
    name:[''],
    psw:['']
  })

  adminLogin(){
    if(this.adminLoginForm.valid){
      this.bs.adminLoginApi(this.adminLoginForm.value.name,this.adminLoginForm.value.psw).subscribe({
        next:(result:any)=>{
          alert(result.message)
          this.rout.navigateByUrl("admin-home")
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
