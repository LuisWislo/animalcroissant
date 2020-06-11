import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VillagersService {

  private baseUrl = "https://servercruzandoanimales.web.app";

  constructor(private http : HttpClient) { }

  getAllVillagers() {
    return this.http.get<any>(this.baseUrl + '/villagers');    
  }
  
  getAllItems() {
    return this.http.get<any>(this.baseUrl + '/items');    
  }

}
