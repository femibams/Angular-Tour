import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http:HttpClient) { }

  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }

  getJokes() {
    return this.http.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke');
  }
}
