import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Band } from './band';
import { catchError, Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor( private httpClient: HttpClient ) { }

  getBands(){
    return this.httpClient.get('http://127.0.0.1:8000/api/bands');
  }

  getBand():Observable<Band[]>{
    return this.httpClient.get<Band[]>('http://127.0.0.1:8000/api/search');
  }

  findBandId(id:any):Observable<Band[]>{
    return this.httpClient.get<Band[]>('http://127.0.0.1:8000/api/band/'+id);
  }


  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/users');
  }

  adduser(datosUsuario:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addUser', datosUsuario);
  }

  login(datosUsuario:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/loginComplete', datosUsuario);
  }



}
