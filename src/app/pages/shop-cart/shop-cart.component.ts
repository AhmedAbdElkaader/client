import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {
  cart: any
  showMasge = false

  ngOnInit() {

    this.cart = localStorage.getItem("cart")
    this.cart = JSON.parse(this.cart)

    console.log(this.cart)

    if(this.cart){
      this.showMasge = false
      this.cart.forEach((element: any) => {
        if(element.count){
          element.imagePath = element.images[0].image
        }else {
          if(element.image == null){
            element.image = "assets/images/rk.jpeg"
          }
        }
      });
    }else {
      this.showMasge = true
    }

  }

  // massg = "Shop Cart Is Empty"
  removeitem(id:any){

    for(let i = 0 ; i < this.cart.length ; i++){
      if(this.cart[i].id == id){
        console.log("t")
       this.cart.splice(i,1)
      }
    }

    if(this.cart.length == 0){
      localStorage.removeItem("cart")
      this.showMasge = true
    }else {
      localStorage.setItem("cart",JSON.stringify(this.cart))
    }


    console.log(this.cart)
  }
  removeAll() {
    localStorage.removeItem("cart")
    this.cart = []
    this.showMasge = true
  }

}
