import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly BaseUrl = 'http://localhost:3000/';

  constructor(private _Http: HttpClient) { }

  SaveUserData(Urls: any, data: any) {
    return this._Http.post(this.BaseUrl + Urls, data);
  }


  GetUserData(Urls: any) {
    return this._Http.get(this.BaseUrl+Urls);
  }



}
