import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private urlApi: string;
  public messager = new Subject<boolean>();
  public newsletter = new Subject<string>();


  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
  }
  // 'https://test-node-jb.herokuapp.com';
  
  public logUser(username: string, password: string) {
    const body = {
      "username": username,
      "password": password
    };
    return this.http.post(`${this.urlApi}/users/sign-in`, body);
  }
  getUserInfo() {
    const token = localStorage.getItem("token");
    return this.http.get(`${this.urlApi}/users/sign-in)`,
      { headers: { Autorization: `Bearer ${token}` } })

  }
}

