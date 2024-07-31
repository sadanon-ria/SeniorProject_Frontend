import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// component
import { DetailComponent } from './detail/detail-page/detail.component';
import { HistoryComponent } from './history/history-page/history.component';
import { UploadComponent } from './upload/upload-page/upload.component';

// detail module
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './login/login-page/login.component';




// history module
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ExpressComponent } from './express/express-page/express.component';
import { UserLoginComponent } from './user-login/userLogin/user-login.component';
import { UserRegisterComponent } from './user-register/userRegister/user-register.component';
import { MatCardModule } from '@angular/material/card';
import { SummaryComponent } from './summary/summary/summary.component';
import {MatMenuModule} from '@angular/material/menu';
import { SuccesspageComponent } from './successpage/successpage/successpage.component';
import { StudentComponent } from './student/student-page/student.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HistoryComponent,
    UploadComponent,
    LoginComponent,
    ExpressComponent,
    UserLoginComponent,
    UserRegisterComponent,
    SummaryComponent,
    SuccesspageComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule, 
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
