import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { debounceTime, filter } from 'rxjs';
import { Book, SearchResults } from 'src/app/core/models/book-response.model';
import { SearchResultsService } from 'src/app/core/services/search-results.service';
import { TrendingService } from 'src/app/core/services/trending.service';
@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bookSearch: FormControl;

  constructor(
    private searchResults: SearchResultsService,
    private trendingResults: TrendingService
  ) {
    this.bookSearch = new FormControl('');
  }
  searchTerm: string = '';
  isLoading: boolean = true;
  offset: number = 0;
  trendingData: Book[] = [];
  searchBooks: Book[] = [];
  error: any;
  resultLength: number = 0;
  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];
  clearSearch() {
    this.bookSearch.setValue('');
  }
  pageChanged(event: PageEvent) {
    this.offset = event.pageIndex * event.pageSize;
    if (this.searchTerm) {
      this.getResults(this.searchTerm);
    } else {
      this.getTrending();
    }
  }

  getResults(value: string) {
    this.searchResults.getResults(value, this.offset).subscribe(
      (data) => {
        this.searchBooks = data?.docs;
        this.isLoading = false;
        this.resultLength = data?.numFound;
        
      },
      (error) => {
        this.error = error;
        this.isLoading = false;
      }
    );
  }

  getTrending() {
    this.trendingResults.getResults(this.offset).subscribe(
      (data) => {
        this.trendingData = data?.works;
        this.isLoading = false;
      },
      (error) => {
        this.error = error;
        this.isLoading = false;
      }
    )
  }

  ngOnInit(): void {
    this.getTrending();
    this.bookSearch.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: string) => {
        this.searchTerm = value;
        this.getResults(value);
      });
  }
}
