import { Component } from '@angular/core';

import SwiperCore, { Autoplay, Keyboard,  Pagination, Scrollbar, Zoom, SwiperOptions } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom,]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 20,
     loop:true,
     pagination: { clickable: true },
    //  autoplay:true
  };
}
