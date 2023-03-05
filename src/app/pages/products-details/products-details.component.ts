import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard,  Pagination, Scrollbar, Zoom, SwiperOptions } from 'swiper';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { DomSanitizer } from '@angular/platform-browser';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom,]);
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView:1,
    spaceBetween: 20,
     pagination: { clickable: true },
    //  autoplay:true
  };
  prodId:any
  rateArr :any = []
  prodName:any = ""
  images :any = []
  description:any = ""
  stock:any = ""
  prodPrice:any
  reviews:any = []
  prodObj:any
  count = 1
  activeRate = false
  textArea:any
  token : any
  clientID :any
  constructor(private route : ActivatedRoute ,
    private _sanitizer: DomSanitizer,
     private rest : RestService){}

  ngOnInit(){
    this.token = localStorage.getItem("token")
    this.clientID = localStorage.getItem("clientID")
    this.prodId = this.route.snapshot.paramMap.get('id')
    this.getData()
  }

  getData(){
    this.rest.prodDetails(this.prodId).subscribe((res :any) =>{
      console.log(res)
     
      this.prodName = res.name
      this.description = res.description
      this.stock = res.quantity
      this.prodPrice = res.price
      this.prodObj = res
      
     
      if(res.images.length == 0){
        res.images.push({
          image : "assets/images/rk.jpeg"
        })
        
      }else {
        res.images.forEach((element :any) => {
          element.image = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,`+ element.image);
        });
      }
      this.images = res.images
      console.log(this.images)
      this.rateArr = new Array(res.rating)
      res.reviews.forEach((element :any) => {
        element.arr = new Array(element.rating)
      });
      this.reviews = res.reviews
     
    })
  }
  addToCart(){
    this.prodObj.count = this.count
    let cart = []
    cart.push(this.prodObj)
    localStorage.setItem("cart",JSON.stringify(cart))
    this.rest.succesToast("Product Added in Your Cart")
    this.rest.SendDataCard(true)
  }

  plus(){
    this.count = this.count + 1
  }
  minus(){
    if(this.count > 1){
      this.count = this.count - 1
    }
  }

  rateId:string | any
  goActiveRate(id:any){
    this.activeRate = !this.activeRate
    if(id != this.rateId){
      this.activeRate = true
    }
    this.rateId = id
  }

  addReview(){
    let obj = {
      "client_id":this.clientID,
    "product_id": this.prodId,
    "rating": this.rateId,
    "review": this.textArea
    }
    this.rest.addRate(obj,this.token).subscribe((res :any) => {
      console.log(res)
      this.textArea = ""
      this.rateId = 0
      this.getData()
    })
  }
}
