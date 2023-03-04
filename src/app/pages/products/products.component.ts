import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  cat_id:any
  cat_name :any = ""
  products:any = []
  rating:any = []
  constructor(private route : ActivatedRoute ,
    private routing : Router,
    private _sanitizer: DomSanitizer,
     private rest : RestService){}

  ngOnInit(){
    this.cat_id = this.route.snapshot.paramMap.get('id')
    this.getdata()
  }

  getdata(){
    this.rest.catDetails(this.cat_id).subscribe((res :any) => {
      console.log(res)
      this.cat_name = res.name
      res.products.forEach((element :any) => {
        for(let i = 0 ; i < element.rating ; i++){
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
      this.products = res.products
    })
  }

  productDetails(value:any){
    this.routing.navigate(['/products_details', value.id]);
  }

}
