import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl = "http://89.116.25.82:33331/api"
  private ifLogin = new Subject<any>();
  constructor(private http: HttpClient , private toastr: ToastrService ) { }


  // auth
  signUp(obj: any) {
    return this.http.post(`${this.baseUrl}/client/register`, obj)
  }

  login(obj: any){
    return this.http.post(`${this.baseUrl}/client/login`, obj)
  }

  // home 

  homePage(){
    return this.http.get(`${this.baseUrl}/products/home`)
  }

  // category

  allCat(){
    return this.http.get(`${this.baseUrl}/cats/`)
  }

  catDetails(id:any){
    let params = new HttpParams().set('id', id);
    const options = { params: params};
    return this.http.get(`${this.baseUrl}/cats/detailed/`, options)
  }

  // products

  allProduct(){
    return this.http.get(`${this.baseUrl}/products/all/`)
  }
  prodDetails(id:any){
    return this.http.get(`${this.baseUrl}/products/?product_id=${id}`)
  }

  addOrder(obj:any , token:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.post(`${this.baseUrl}/orders/`, obj, { headers: headers })
  }

  // packges

  allPackge(){
    return this.http.get(`${this.baseUrl}/packages/`)
  }

  packDetails(id:any){
    return this.http.get(`${this.baseUrl}/packages/detailed?package_id=${id}`)
  }

  // user profile

  userData(id:any , token:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(`${this.baseUrl}/client/?client_id=${id}` , { headers: headers })
  }

  finshClientData(obj:any , token:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.post(`${this.baseUrl}/client/finishData`, obj, { headers: headers })
  }

  updateClientData(obj:any , token:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.put(`${this.baseUrl}/client/`, obj, { headers: headers })
  }

  addRate(obj:any , token:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.post(`${this.baseUrl}/rating/`, obj, { headers: headers })
  }

  // toster

  succesToast(name:any){
    this.toastr.success( name , 'Greate' ,{
      timeOut : 3000
    });
  }

  erorrToaster(name:any){
    this.toastr.error( name , 'Opps' ,{
      timeOut : 3000
    });
  }


  // obser

  SendDataIfLogin(event: any) {
    this.ifLogin.next(event);
  }

  getDataIfLogin(): Observable<any> {
    return this.ifLogin.asObservable();
  }
}
