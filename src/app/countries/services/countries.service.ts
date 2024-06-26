import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of} from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiurl:string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode(code: string): Observable<Country | null>{
    return this.http.get<Country[]>(`${this.apiurl}/alpha/${code}`)
    .pipe(
      map (countries => countries.length > 0 ? countries[0] : null),
      catchError(error => of(null))
      );
  }

  searchCapital(term: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiurl}/capital/${term}`)
    .pipe(
      catchError(error => of([]))
      );
  }

  searchCountry(term: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiurl}/name/${term}`)
    .pipe(
      catchError(error => of([]))
      );
  }

  searchRegion(region: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiurl}/region/${region}`)
    .pipe(
      catchError(error => of([]))
      );
  }


}
