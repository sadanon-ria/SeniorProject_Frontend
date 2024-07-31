import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  public registerForm!: FormGroup;

  constructor(private router: Router, private service:ServiceService,private authenticationService: AuthenticationService) { }

  detailBt() {
    this.router.navigateByUrl('/detail');
  };

  historyBt() {
    this.router.navigateByUrl('/history');
  };
  
  uploadBt() {
    this.router.navigateByUrl('/upload');
  };
  expressBt() {
    this.router.navigateByUrl('/expresspage');
  };
  adduserBt() {
    this.router.navigateByUrl('/singup');
  };
  summaryBt() {
    this.router.navigateByUrl('/summary');
  }

  selectedRole: string = ""
  
  roles = [
    { value: 'security', viewValue: 'ยาม' },
    { value: 'addmin', viewValue: 'addmin' },
  ];

  public firstname:any = ""
  public lastname:any = ""
  public roless:any = ""

  
  ngOnInit() {
    this.getLogin()
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      roles: new FormControl('', Validators.required)
    });
  }

  getLogin() {
    this.firstname = localStorage.getItem("firstname")
    this.lastname = localStorage.getItem("lastname")
    this.roless = localStorage.getItem("roles")
    console.log(this.firstname)
  }
  public logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  

  public onSubmit() {
    this.authenticationService.register(
      this.registerForm.get('username')!.value,
      this.registerForm!.get('password')!.value,
      this.registerForm!.get('firstname')!.value,
      this.registerForm!.get('lastname')!.value,
      this.registerForm!.get('roles')!.value
    );
  }
}
