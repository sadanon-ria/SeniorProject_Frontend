import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { ServiceService } from 'src/app/service.service';

export interface expressData {
  date: Date;
  name: string;
  phone: any;
  express: any;
  parcel: any;
}

const data: expressData[] = []

@Component({
  selector: 'app-express',
  templateUrl: './express.component.html',
  styleUrls: ['./express.component.css']
})

export class ExpressComponent {

  display: any[] = ['date', 'name', 'phone', 'express', 'parcel'];
  // dataDisplay: MatTableDataSource<expressData>;
  dataDisplay = new MatTableDataSource<expressData>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  public firstname:any = ""
  public lastname:any = ""
  public roles:any = ""

  ngOnInit(): void {
    this.getData()
    this.getLogin()
  }

  getLogin() {
    this.firstname = localStorage.getItem("firstname")
    this.lastname = localStorage.getItem("lastname")
    this.roles = localStorage.getItem("roles")
    console.log(this.firstname)
  }

  testData: any[] = []
  
  // getData() {
  //   let test:any = []
  //   this.service.getDetail().subscribe(res => {
  //     for (let i = 0; i < Object.values(res)[1].length; i++){
  //       console.log("1")
  //       this.testData.push(Object.values(res)[1][i])
  //     }
  //     test = res
  //     console.log(this.testData)
  //     this.convert(this.testData)
  //   })
  // }
  getData() {
    let test:any = []
    this.service.getDetail().subscribe(res => {
      test =  res
      console.log(Object.values(test["data"]))
      this.convert(res)
    })
  }

  convert(data: any) {
    console.log(Object.values(data["data"]).length)
    console.log(data["data"]["phone"])
    let list = []
    for (let i = 0; i < Object.values(data["data"]).length; i++){
      list.push({
        "date": data["data"][i]["date"],
        "name": data["data"][i]["name"],
        "phone": data["data"][i]["phone"],
        "express": data["data"][i]["express"],
        "parcel": data["data"][i]["parcel"]
      })
      this.dataDisplay.data = list
      console.log(this.dataDisplay.data)
      console.log(list)
    }
  }
 
  public logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  constructor(private router: Router, private service: ServiceService) { 
    this.dataDisplay = new MatTableDataSource<expressData>(data);

  }
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

  ngAfterViewInit() {
    this.dataDisplay.paginator = this.paginator;
    this.dataDisplay.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataDisplay.filter = filterValue.trim().toLowerCase();

    if (this.dataDisplay.paginator) {
      this.dataDisplay.paginator.firstPage();
    }
  }
}
