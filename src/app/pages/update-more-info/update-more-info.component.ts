import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-update-more-info',
  templateUrl: './update-more-info.component.html',
  styleUrls: ['./update-more-info.component.scss']
})
export class UpdateMoreInfoComponent implements OnInit {

  updateClient: FormGroup | any;

  constructor(public dialogRef: MatDialogRef<UserProfileComponent>){}

  ngOnInit(){
    this.updateClient = new FormGroup({
      ["marital status"]: new FormControl(""),
      ["job"]: new FormControl(""),
      ["favorite colour"]: new FormControl(""),
      ["how did you know us"]: new FormControl(""),
      ["your ultimate goal"]: new FormControl(""),
      ["how you make yourself happy"]: new FormControl(""),
      ["how do you spend your spare time"]: new FormControl(""),
      ["do you like surprises, if yes, what's your best surprise"]: new FormControl(""),
    })
  }

  onNoClick(): void {
    console.log(this.updateClient.value)
     this.dialogRef.close(this.updateClient.value);
  }

}
