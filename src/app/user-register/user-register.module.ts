import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// history module
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatSortModule} from '@angular/material/sort';
// import { MatTableModule } from '@angular/material/table';
// import { HttpClientModule } from '@angular/common/http';

// detail module
// import { MatIconModule } from '@angular/material/icon';
// import { MatSelectModule } from '@angular/material/select';
// import { MatButtonModule } from '@angular/material/button';

import { UserRegisterRoutingModule } from './user-register-routing.module';
import { UserRegisterComponent } from './userRegister/user-register.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    UserRegisterRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    // MatIconModule,
    // MatSelectModule,
    // MatButtonModule,
    // MatTableModule,
    // HttpClientModule,
    // MatPaginatorModule,
    // MatSortModule
  ]
})
export class UserRegisterModule { }
