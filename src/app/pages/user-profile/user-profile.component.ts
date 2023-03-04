import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UpdataClientComponent } from '../updata-client/updata-client.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  token: any
  clientID: any
  fullName : any
  mobileNumber:any
  city:any
  email:any
  userName:any
  best_surprise : any
  favColor:any
  marital_status :any
  Ultimate_goals :any
  orders :any = []
  constructor(private rest: RestService, public dialog: MatDialog) { }

  ngOnInit() {
    this.token = localStorage.getItem("token")
    this.clientID = localStorage.getItem("clientID")

    this.getData()
    // this.client_finsh_data()
  }

  getData() {
    this.rest.userData(this.clientID, this.token).subscribe((res: any) => {
      console.log(res)
      if(res.first_name ){
        this.fullName = res.first_name + " " + res.last_name
      }else {
        this.fullName = " "
      }
      this.mobileNumber = res.phone_number ? res.phone_number : "No Data Found"

      this.city =  res.city == null ? "No Data Found" : res.city 

      this.email =  res.email
      this.userName = res.username
      this.best_surprise = res[`do you like surprises, if yes, what's your best surprise`] ? res[`do you like surprises, if yes, what's your best surprise`] : "No Data Found"
      this.favColor = res['favorite colour'] ? res['favorite colour'] : "No Data Found"
      this.marital_status = res['marital status'] ? res['marital status'] : "No Data Found"
      this.Ultimate_goals = res['your ultimate goal'] ? res['your ultimate goal'] : "No Data Found"
      this.orders = res.orders
    })
  }

  client_finsh_data() {
    let obj = {
      "id": this.clientID,
      "marital status": "edit email for user",
      "job": "",
      "favorite colour": "wawa",
      "how did you know us": "koko",
      "your ultimate goal": "wara safi7et l zbala",
      "how you make yourself happy": "safi7et l zbala",
      "how do you spend your spare time": "l zbala nfsaha",
      "do you like surprises, if yes, what's your best surprise": "l tot abo sharon"
    }
    this.rest.finshClientData(obj, this.token).subscribe((res: any) => {
      console.log(res)
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdataClientComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result)
      let results : any = result
      results.id = this.clientID
      this.rest.updateClientData(results,this.token).subscribe((res :any) => {
        console.log(res)
      })
    });
  }

}
