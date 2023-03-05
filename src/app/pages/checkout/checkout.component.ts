import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddresComponent } from '../addres/addres.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cart: any
  clientID: any
  token: any
  arrofProd :any = []
  arrOfPackges:any = []
  cashed = true
  constructor(private rest : RestService ,
    private route : Router ,
     public dialog: MatDialog) { }

  ngOnInit() {
    this.token = localStorage.getItem("token")
    this.clientID = localStorage.getItem("clientID")
    this.cart = localStorage.getItem("cart")
    this.cart = JSON.parse(this.cart)
    console.log(this.cart)

    this.cart.forEach((element : any) => {
      if(element.count){
        this.arrofProd.push({
          id:element.id,
          quantity : element.count
        })
      }
      if(!element.count){
        this.arrOfPackges.push({
          id:element.id,
          amount : 1
        })
      }

  
    });

  }

  checkout() {
    let obj = {
      client_id : this.clientID,
      products : this.arrofProd,
      cashed : this.cashed,
      packages : this.arrOfPackges
    }
    console.log(obj)
    this.rest.addOrder(obj,this.token).subscribe((res :any) => {
      console.log(res)
      this.rest.succesToast("Order Send")
      localStorage.removeItem('cart')
      this.route.navigateByUrl('/home')
    },(err :any) => {
      console.log(err)
      this.rest.erorrToaster("Somthing Wrong Pleas Try Again")
    })
  }

  radioValu(e:any){
    this.cashed = e
    console.log(e)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddresComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result)
      if(result){
        let results = result
        results.id = this.clientID
        this.rest.updateClientData(results,this.token).subscribe((res :any) => {
          this.checkout()
        })
      }

    });
  }
}
