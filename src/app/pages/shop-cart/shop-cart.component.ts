import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {
  cart: any

  ngOnInit() {

    this.cart = localStorage.getItem("cart")
    this.cart = JSON.parse(this.cart)

    console.log(this.cart)


    this.cart.forEach((element: any) => {
      if(element.count){
        element.imagePath = element.images[0].image
      }else {
        if(element.image == null){
          element.image = "assets/images/rk.jpeg"
        }
      }
    });
  }

}
