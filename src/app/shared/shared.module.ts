import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view/table-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
@NgModule({
  declarations: [TableViewComponent, LoadingComponent, ErrorComponentComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
  exports: [
    TableViewComponent,
    LoadingComponent,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    ErrorComponentComponent,
  ],
})
export class SharedModule {}
