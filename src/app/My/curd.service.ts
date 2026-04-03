import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  readonly Urlss = "http://localhost:3000/users";

  constructor(private _https: HttpClient) { }

  // CREATE
  AddsUsers(data: any) {
    return this._https.post(this.Urlss, data);
  }

  // READ ALL
  GetsUsers() {
    return this._https.get(this.Urlss);
  }

  // READ BY ID
  GetUserById(id: number) {
    return this._https.get(`${this.Urlss}/${id}`);
  }

  // UPDATE
  UpdateUser(id: number, data: any) {
    return this._https.put(`${this.Urlss}/${id}`, data);
  }

  // DELETE
  DeleteUser(id: number) {
    return this._https.delete(`${this.Urlss}/${id}`);
  }
}