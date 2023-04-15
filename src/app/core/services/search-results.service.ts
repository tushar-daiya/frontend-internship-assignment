import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { SearchResults } from '../models/book-response.model';
@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private apiService:ApiService) { }
  getResults(query:string,offset:number):Observable<SearchResults> {
    const limit = 10;
    return this.apiService.get(`/search.json?q=${query}&limit=${limit}&offset=${offset}`);
  }
}
