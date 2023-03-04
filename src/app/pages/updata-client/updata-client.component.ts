import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updata-client',
  templateUrl: './updata-client.component.html',
  styleUrls: ['./updata-client.component.scss']
})
export class UpdataClientComponent implements OnInit {

  updateClient: FormGroup | any;

  constructor(public dialogRef: MatDialogRef<UserProfileComponent>,){}

  ngOnInit(){
    this.updateClient = new FormGroup({
      phone_number: new FormControl("", [Validators.required]),
      first_name: new FormControl("", [Validators.required]),
      last_name: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
    })
  }

  onNoClick(): void {
    this.dialogRef.close(this.updateClient.value);
  }
}
