import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Front} from './data';
@Injectable(
  //{
  //providedIn: 'root'
  //}
)
export class FetchdataService {
  private _url : string ="http://coincap.io/front";
  
  constructor(private http : HttpClient) { }
  getCoins():Observable<Front[]>{
    return this.http.get<Front[]>(this._url);
 }
}
