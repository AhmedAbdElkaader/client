import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  all_categoy: any = []
  constructor(private rest: RestService,
    private router: Router,
    private _sanitizer: DomSanitizer, ) { }

  ngOnInit() {
    this.all_cat()
  }

  all_cat() {
    this.rest.allCat().subscribe((res: any) => {
      console.log(res)
      this.all_categoy = res
      this.all_categoy.forEach((element: any) => {
        if (element.image != null) {
          element.image.image = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,` + element.image.image);
        } else {
          element.image = {
            image: "assets/images/rk.jpeg"
          }
        }
      });
    })
  }

  cat_details(value: any) {
    localStorage.setItem("catName", value.name)
    this.router.navigate(['/Products', value.id]);
  }

}
