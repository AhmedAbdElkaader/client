import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { hasSubscribers } from 'diagnostics_channel';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products:any
  rating:any = []
  constructor(private rest :RestService , 
    private routing : Router,
     private _sanitizer: DomSanitizer,){}
  ngOnInit(){
    this.getdata()
  }
  

  getdata(){
    this.rest.allProduct().subscribe((res :any) => {
      console.log(res)

      res.forEach((element :any) => {
        this.rating = []
        for(let i = 0 ; i < element.rating ; i++){
          console.log(element)
          this.rating.push("1")
        }
        element.rating_arr =  this.rating
        if(element.images.length != 0){
          element.images[0].image = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,`+ element.images[0].image);
        }else {
          element.images.push({
            image:"assets/images/rk.jpeg"
          })
        }
      });
      this.products = res
    })
  }

  productDetails(value:any){
    this.routing.navigate(['/products_details', value.id]);
  }
}
