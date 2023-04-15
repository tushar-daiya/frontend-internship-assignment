import { Component, Input } from '@angular/core';

@Component({
  selector: 'front-end-internship-assignment-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.scss'],
})
export class ErrorComponentComponent {
  @Input() error: any;

  
}
