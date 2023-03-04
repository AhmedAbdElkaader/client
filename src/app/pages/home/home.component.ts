import { Component, OnInit } from '@angular/core';

import SwiperCore, { Autoplay, Keyboard,  Pagination, Scrollbar, Zoom, SwiperOptions } from 'swiper';
import { RestService } from 'src/app/services/rest.service';
import { DomSanitizer } from '@angular/platform-browser';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  config: SwiperOptions = {
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
    spaceBetween: 20,
     loop:true,
     pagination: { 
       clickable : true ,
       dynamicBullets:true
      },
  };
  category:any 
  products:any
  allPacges:any
  constructor(private rest : RestService ,  private _sanitizer: DomSanitizer){}

  ngOnInit(){
    this.getData()
  }

  getData(){
    this.rest.homePage().subscribe((res: any) => {
      console.log(res)
      this.category = res.categories
      this.products = res.products
      this.allPacges = res.packages

      this.category.forEach((element: any) => {
        if (element.image != null) {
          element.image.image = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,` + element.image.image);
        } else {
          element.image = {
            image: "assets/images/rk.jpeg"
          }
        }
      });
      this.products.forEach((element :any) => {
        if(element.images.length != 0){
          element.images[0].image = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,`+ element.images[0].image);
        }else {
          element.images[0] = {
            image: "assets/images/rk.jpeg"
          }
        }
      });
      this.allPacges.forEach((element:any) => {
        if(element.image != null){
          element.image = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,`+ element.image);
        }else {
          element.image = "assets/images/rk.jpeg"
        }
      });

    })
  }


}
