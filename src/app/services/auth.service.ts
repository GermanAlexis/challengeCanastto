import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getToken(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('token');
      token ? resolve(true) : reject(false)
    });
  }

  setToken() {
      localStorage.setItem('token', 'true')
  }

}
