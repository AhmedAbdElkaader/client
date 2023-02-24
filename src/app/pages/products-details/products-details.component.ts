import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard,  Pagination, Scrollbar, Zoom, SwiperOptions } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom,]);
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
     loop:true,
     pagination: { clickable: true },
    //  autoplay:true
  };
}
