import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
  

export class DetailComponent {
  constructor(private router: Router, private service: ServiceService) { }

  public firstname:any = ""
  public lastname:any = ""
  public roless:any = ""

  ngOnInit(): void {
    this.getLogin()
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

  addList() {
    let data = {
      "name": this.name,
      "phone": this.phone,
      "express": this.selectedExpress,
      "parcel": Number (this.parcel)
    }
    console.log(data)
    this.service.addList(data).subscribe(res => {
      console.log(data)
    })
    this.name = ""
    this.phone = ""
    this.selectedExpress = ""
    this.parcel = 0
  }

  // ตัวแปร สำหรับเลือ role และ company
  selectedExpress: string = ""

  name: string = ""
  phone: string = ""
  parcel: number = 0
  
  express = [
    { value: 'flash', viewValue: 'Flash Express' },
    { value: 'kerry', viewValue: 'Kerry Express' },
    { value: 'thai-post', viewValue: 'Thai Post' },
    { value: 'best', viewValue: 'Best Express' },
    { value: 'jnt', viewValue: 'J&T Express' },
  ];

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

}
