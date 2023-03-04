import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  ifLogin = false
  userEmail : any = ""

  constructor(private rest : RestService , private route : Router){}

  ngOnInit(){
    if(localStorage.getItem("user")){
      this.ifLogin = true
      this.userEmail =  localStorage.getItem("user")
    }else {
      this.ifLogin = false
    }
    this.rest.getDataIfLogin().subscribe((res :any) => {
      console.log(res)
     this.userEmail =  localStorage.getItem("user")
     this.ifLogin = true
    })
  }

  logout(){
    localStorage.clear()
    this.route.navigateByUrl('/')
    this.ifLogin = false
  }

}
