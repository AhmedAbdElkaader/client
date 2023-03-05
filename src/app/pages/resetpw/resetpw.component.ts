import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.scss']
})
export class ResetpwComponent implements OnInit {

  code:any
  password:any

  constructor(private rest : RestService , private route : Router){}

  ngOnInit(){}

  submit(){
    let obj = {
      "reset_token":this.code,
      "password": this.password
    }
    this.rest.resetpw(obj).subscribe((res :any) => {
      console.log(res)
      this.rest.succesToast("Password Changed")
      this.route.navigateByUrl('/home')
    })
  }

}
