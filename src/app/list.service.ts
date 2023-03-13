import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private url = "https://6405e15ceed195a99f8f7606.mockapi.io/radhe/candidateName/api/v1/listcandidate"
  post: any;
  constructor(private _httpsclient: HttpClient) { }
    getDate(){
      return this._httpsclient.get(this.url);
    }
}
