import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpressRoutingModule } from './express-routing.module';

import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExpressRoutingModule,
    FormsModule,
    MatMenuModule
  ]
})
export class ExpressModule { }
