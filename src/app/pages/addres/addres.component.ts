import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-addres',
  templateUrl: './addres.component.html',
  styleUrls: ['./addres.component.scss']
})
export class AddresComponent implements OnInit {

  clientAddres: FormGroup | any;

  constructor(public dialogRef: MatDialogRef<CheckoutComponent>){}
  
  ngOnInit(){
    this.clientAddres = new FormGroup({
      address: new FormControl("", [Validators.required]),
      governorate: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
    })
  }

  onNoClick(): void {
    this.dialogRef.close(this.clientAddres.value);
  }

}
