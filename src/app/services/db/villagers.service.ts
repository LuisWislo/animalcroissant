import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/entities/user';
import { Villager } from 'src/app/entities/villager';
import { Item } from 'src/app/entities/item';

@Injectable({
  providedIn: 'root'
})
export class VillagersService {

  private baseUrl = "https://servercruzandoanimales.web.app";

  constructor(private http : HttpClient) { }

  //REGISTER
  register(user : User) {
    return this.http.post<any>(this.baseUrl + "/register_user", user);
  }

  // VILLAGERS

  getAllVillagers() : Observable<Villager[]> {
    return this.http.get<Villager[]>(this.baseUrl + '/get_all_villagers');    
  }

  getVillager(villagerName : string) : Observable<Villager> {
    return this.http.get<Villager>(this.baseUrl + '/get_villager/' + villagerName);    
  }
  
  getAllItems() : Observable<Item[]>{
    return this.http.get<Item[]>(this.baseUrl + '/get_all_items');    
  }

  getManyItems(many : number) : Observable<Item[]>{
    return this.http.get<Item[]>(this.baseUrl + '/get_many_items/' + many);    
  }

  addFavorite(username : string, villager : string) {
    return this.http.post<any>(this.baseUrl + "/add_villager", {username: username, villager: villager});
  }

  getCategories() : Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/get_categories");
  }

  getItemsByCategory(category : string) {
    return this.http.get<any>(this.baseUrl + "/get_item_category/" + category);
  }

  //USER

  getUser(username : string) : Observable<User> {
    return this.http.get<User>(this.baseUrl + "/get_user/" + username);
  }



}
