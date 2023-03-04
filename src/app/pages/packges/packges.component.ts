import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packges',
  templateUrl: './packges.component.html',
  styleUrls: ['./packges.component.scss']
})
export class PackgesComponent implements OnInit {

  allPacges : any = []
  constructor(private rest : RestService , 
    private route : Router,
     private _sanitizer: DomSanitizer){}

  ngOnInit(){
    this.getData()
  }

  getData(){
    this.rest.allPackge().subscribe((res :any) => {
      console.log(res)
      this.allPacges = res

      this.allPacges.forEach((element:any) => {
        if(element.image != null){
          element.image = this._sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,`+ element.image);
        }else {
          element.image = "assets/images/rk.jpeg"
        }
      });
    })
  }

  pack_details(id:any){
    this.route.navigate(['/packges_details',id])
  }

}
