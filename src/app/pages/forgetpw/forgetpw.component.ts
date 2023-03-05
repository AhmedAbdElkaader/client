import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpw',
  templateUrl: './forgetpw.component.html',
  styleUrls: ['./forgetpw.component.scss']
})
export class ForgetpwComponent implements OnInit {

  emailText:any
  token:any
  constructor(private rest : RestService , private route : Router){}

  ngOnInit(){
   this.token =  localStorage.getItem('token')
  }

  submit(){
    let obj = {
      email : this.emailText
    }
    this.rest.forget_pw(obj).subscribe((res :any) => {
      console.log(res)
      if(res.message == "Client not found"){
        this.rest.erorrToaster("Email Not found")
      }else {
        this.route.navigateByUrl('/reset_pw')
        this.rest.succesToast("Check Your Email")
      }
    })
  }

}
