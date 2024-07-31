import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
// history module
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  providers:[],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HistoryModule { }
