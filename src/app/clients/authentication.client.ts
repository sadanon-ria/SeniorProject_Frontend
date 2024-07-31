import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
  
export class AuthenticationClient {
  // public url = 'https://cs403.onrender.com'
  public url = 'https://cs403-m3uwkxxhna-as.a.run.app'
  constructor(private http: HttpClient) { }
  login = (username: any, password: any): Observable<any> => {
  return this.http.post(this.url + '/singin', { "username": username, "password": password })
    .pipe(
      map((response: any) => response),
      catchError((error: any) => {
        // ทำการจัดการข้อผิดพลาดตามที่คุณต้องการ
        // เช่น แสดงข้อความผิดพลาดหรือกระทำอื่น ๆ ตามต้องการ
        return throwError(error);
      })
    );
}
  // public login = (username: string, password: string): any => {
  //   return this.http.post(
  //     this.url + '/singin', {
  //       "username": username,
  //       "password": password
  //   })
  //     .pipe(map(res => res)) ;
  // }

  // :Observable<string>
  // public login(username: string, password: string): any => {
    
    // return this.http.post(this.masterurl + 'login', { "email": username, "password": password }).pipe(map(res => res));
    // return this.http.post(
    //   'https://cs403.onrender.com/singin',
    //   {
    //     username: username,
    //     password: password,
    //   }.pipe(map(res => res));
    // );
  // }

  public register(
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    roles: string
  ): Observable<string> {
    return this.http.post(
      'https://cs403-m3uwkxxhna-as.a.run.app/singup',
      {
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
        roles: roles
      },
      { responseType: 'text' }
    );
  }
}
