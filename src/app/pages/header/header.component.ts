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
  showCardNotifcation = false
  cardLength = 0
  constructor(private rest : RestService , private route : Router){}

  ngOnInit(){
    let cart :any = localStorage.getItem("cart")
    cart = JSON.parse(cart)
    if(localStorage.getItem("user")){
      this.ifLogin = true
      this.userEmail =  localStorage.getItem("user")
    }else {
      this.ifLogin = false
    }
    if(cart){
      if(cart.length != 0){
        this.cardLength = cart.length
        this.showCardNotifcation = true
      }else {
        this.showCardNotifcation = false
      }
    }else {
      this.cardLength = 0
    }

    this.rest.getDataIfLogin().subscribe((res :any) => {
      console.log(res)
     this.userEmail =  localStorage.getItem("user")
     this.ifLogin = true
    })

    this.rest.getDataCard().subscribe((res :any) => {
      if(cart){
        if(cart.length != 0){
          this.cardLength = cart.length
          this.showCardNotifcation = true
        }else {
          this.showCardNotifcation = false
        }
      }else{
        this.cardLength = 0
      }
      if(res == true){
        this.showCardNotifcation = true
      }else {
        this.showCardNotifcation = false
      }
    })
  }

  logout(){
    localStorage.clear()
    this.route.navigateByUrl('/')
    this.ifLogin = false
  }

}
