import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-packge-details',
  templateUrl: './packge-details.component.html',
  styleUrls: ['./packge-details.component.scss']
})
export class PackgeDetailsComponent implements OnInit {

  packID: any;
  discount:any
  packImage:any
  name:any
  products:any = []
  price:any
  quantity:any
  response :any
  constructor(private route : ActivatedRoute,
    private _sanitizer: DomSanitizer,
     private rest : RestService){}

  ngOnInit(){
    this.packID = this.route.snapshot.paramMap.get('id')
    this.getData()
  }

  getData(){
    this.rest.packDetails(this.packID).subscribe((res :any) => {
      console.log(res)
      this.response = res
      this.discount = res.discount
      this.name = res.name
      this.price = res.total_price
      this.quantity = res.quantities
      this.packImage = res.image
      if(this.packImage != null){
        this.packImage = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,`+ this.packImage);
      }else {
        this.packImage = "assets/images/rk.jpeg"
      }
      res.ProductPackages.forEach((element:any) => {
        if(element.products.image.length != 0){
          element.imagePath = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,`+ element.products.image[0]);
        }else {
          element.imagePath = "assets/images/rk.jpeg"
        }
      });
      this.products = res.ProductPackages
    })
  }

  addToCart(){
    let cart = []
    cart.push(this.response)
    localStorage.getItem('cart')
    if(localStorage.getItem('cart')){
      let dumCart:any = localStorage.getItem('cart')
      dumCart = JSON.parse(dumCart)
      dumCart.push(this.response)
      localStorage.setItem("cart",JSON.stringify(dumCart))
    }else {
      localStorage.setItem("cart",JSON.stringify(cart))
    }
    this.rest.succesToast("Package Added in Your Cart")
    this.rest.SendDataCard(true)
  }
}
