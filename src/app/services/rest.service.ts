import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl = "http://37.61.212.46:33333/api"

  constructor(private http: HttpClient) { }


  // auth
  signUp(obj: any) {
    return this.http.post(`${this.baseUrl}/client/register`, obj)
  }

  login(obj: any){
    return this.http.post(`${this.baseUrl}/client/login`, obj)
  }


}
