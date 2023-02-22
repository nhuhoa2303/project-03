import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/Products';
const API_URL = 'http://localhost:8080/'
@Injectable({
  providedIn: 'root'
})

export class ApiDisplayService {
private API_PRODUCTS = API_URL + 'list'
  constructor(private httpClient: HttpClient, ) { }

getAll(): Observable<Products[]>{
  return this.httpClient.get<Products[]>(this.API_PRODUCTS);
}


}
