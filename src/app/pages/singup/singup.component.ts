import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  constructor(private rest :RestService , private route : Router){}

  formRegister: FormGroup | any;
  formStatus = false
  ngOnInit(){
    this.formRegister = new FormGroup({
      email: new FormControl("", [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl("", [Validators.required , Validators.minLength(8)]),
      username: new FormControl("", Validators.required),
    })
  }

  submit(){
    if(!this.formRegister.valid){
      this.formStatus = true
    }else {
      this.formStatus = false
      let form = this.formRegister.value
      this.rest.signUp(form).subscribe((res :any) => {
        console.log(res)
        localStorage.setItem("token",res.access_token)
        localStorage.setItem("user",res.client.email)
        this.rest.SendDataIfLogin("true")
        this.route.navigateByUrl("/home")
        this.rest.succesToast("Register Successfully")
      },(err :any) => {
        console.log(err)
        this.rest.erorrToaster("Some Error Happened Pleas Try Again")
      })
    }
  }

}
