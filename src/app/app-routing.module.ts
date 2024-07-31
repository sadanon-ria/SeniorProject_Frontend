import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail-page/detail.component';
import { HistoryComponent } from './history/history-page/history.component';
import { UploadComponent } from './upload/upload-page/upload.component'
import { LoginComponent } from './login/login-page/login.component';
import { ExpressComponent } from './express/express-page/express.component';
import { UserLoginComponent } from './user-login/userLogin/user-login.component';
import { UserRegisterComponent } from './user-register/userRegister/user-register.component';
import { SummaryComponent } from './summary/summary/summary.component';
import { SuccesspageComponent } from './successpage/successpage/successpage.component';
import { authGuard } from './auth.guard';
import { rolesGuard } from './roles.guard';
import { StudentComponent } from './student/student-page/student.component';


const routes: Routes = [
  {
    path: 'detail', loadChildren: () =>
      import('./detail/detail.module').then(min => min.DetailModule),component: DetailComponent,
    canActivate: [authGuard]
  },
  {
    path: 'history', loadChildren: () =>
      import('./history/history.module').then(min => min.HistoryModule), component: HistoryComponent,
    canActivate: [authGuard]
  },
  {
    path: 'upload', loadChildren: () =>
      import('./upload/upload.module').then(min => min.UploadModule),component: UploadComponent,
    canActivate: [authGuard]
  },
  {
    path: 'expresspage', loadChildren: () =>
      import('./express/express.module').then(min => min.ExpressModule),component: ExpressComponent,
    canActivate: [authGuard]
  },
  // page for admin
  {
    path: 'singup', loadChildren: () =>
      import('./user-register/user-register.module').then(min => min.UserRegisterModule),component: UserRegisterComponent,
    canActivate: [authGuard, rolesGuard]
  },
  {
    path: 'summary', loadChildren: () =>
      import('./summary/summary.module').then(min => min.SummaryModule),component: SummaryComponent,
    canActivate: [authGuard, rolesGuard]
  },
  // login line & user login
  {
    path: 'linelogin', loadChildren: () =>
      import('./login/login.module').then(min => min.LoginModule),component: LoginComponent
  },
  {
    path: '', loadChildren: () =>
      import('./user-login/user-login.module').then(min => min.UserLoginModule),component: UserLoginComponent
  },
  // page line login success
  {
    path: 'success', loadChildren: () =>
      import('./successpage/successpage.module').then(min => min.SuccesspageModule),component: SuccesspageComponent
  },
  // page table for user (student)
  {
    path: 'table', loadChildren: () =>
      import('./student/student.module').then(min => min.StudentModule),component: StudentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
