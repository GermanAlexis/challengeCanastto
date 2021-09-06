import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseProduct } from '../shared/interfaces/interfacesProducts';
const base_url = environment.url
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getCategoyProduc(){
    return this.http.get<ResponseProduct>(base_url)
  }
}
