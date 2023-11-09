import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit{

  userRegForm=this.fb.group({
    email:[''],
    psw:['']
  })

  constructor(private rout:Router, private fb:FormBuilder,private bs:BookserviceService){}

  ngOnInit(): void {
  }

  userReg(){
    if(this.userRegForm.valid){
      this.bs.userRegApi(this.userRegForm.value.email,this.userRegForm.value.psw).subscribe({
        next:(result:any)=>{
          alert(result.message)
          this.rout.navigateByUrl("user-login")
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
