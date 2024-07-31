import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from './clients/authentication.client';

@Injectable({
  providedIn: 'root'
})
  
export class AuthenticationService {

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}

  public login(username: string, password: string): void {
    console.log(username)
    this.authenticationClient.login(username, password).subscribe(
      (token: any) => {
        localStorage.setItem("access_token", token.access_token);
        localStorage.setItem("username", token.username);
        localStorage.setItem("firstname", token.firstname);
        localStorage.setItem("lastname", token.lastname);
        localStorage.setItem("roles", token.roles);
      this.router.navigate(['/history']);
    });
  }

  public register(username: string, password: string, firstname: string, lastname:string, roles:string): void {
    this.authenticationClient
      .register(username, password, firstname, lastname, roles)
      .subscribe((token) => {
        this.router.navigate(['/']);
      });
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem("access_token");
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem("access_token") : null;
  }
}
