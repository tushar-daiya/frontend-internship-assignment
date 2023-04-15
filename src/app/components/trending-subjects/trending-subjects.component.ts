import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SubjectsService } from '../../core/services/subjects.service';
import { Book } from 'src/app/core/models/book-response.model';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'front-end-internship-assignment-trending-subjects',
  templateUrl: './trending-subjects.component.html',
  styleUrls: ['./trending-subjects.component.scss'],
})
export class TrendingSubjectsComponent implements OnInit {
  isLoading: boolean = true;

  subjectName: string = '';

  allBooks: Book[] = [];

  constructor(
    private route: ActivatedRoute,
    private subjectsService: SubjectsService
  ) {}
  offset: number = 0;
  resultLength: number = 0;
  error: any;
  pageChanged(event: PageEvent) {
    this.offset = event.pageIndex * event.pageSize;
    this.getAllBooks();
  }
  getAllBooks() {
    this.subjectsService
      .getAllBooks(this.subjectName, this.offset)
      .subscribe((data) => {
        this.allBooks = data?.works;
        this.resultLength = data.work_count;
        this.isLoading = false;
      },(error)=>{
this.error=error;
this.isLoading=false;
      });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subjectName = params.get('name') || '';
      this.isLoading = true;
      this.getAllBooks();
    });
  }
}
