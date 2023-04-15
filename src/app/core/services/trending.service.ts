import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { BookResponse, SearchResults } from '../models/book-response.model';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor(private apiService: ApiService) {}

  getResults(offset: number): Observable<BookResponse> {
    const limit = 10;
    return this.apiService.get(
      `/trending.json?limit=${limit}&offset=${offset}`
    );
  }
}
