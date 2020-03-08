import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Animals } from "../models/animalModel";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  API_URI = 'http://localhost:5000'
  API_URI2 = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAnimals():Observable<any> {

    return this.http.get(`${this.API_URI2}/users`);
  }

  saveProduct(animal:Animals):Observable<any> {
    
    return this.http.post(`${this.API_URI}/insertar`, animal)
  }


}
