import { Component, OnInit, ViewChild } from '@angular/core';
import { liff } from '@line/liff';

import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface UserData {
  number: number;
  name: any;
  date: Date;
  company: any;
  take: any;
}


const data: UserData[] = []
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
  
export class StudentComponent implements OnInit  {
  display: any[] = ['number', 'name', 'date', 'company', 'take'];
  dataDisplay: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  ngOnInit(): void {
    this.getData()
    this.getLogin()
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  public firstname:any = ""
  public lastname:any = ""
  public roles:any = ""

  getLogin() {
    this.firstname = localStorage.getItem("firstname")
    this.lastname = localStorage.getItem("lastname")
    this.roles = localStorage.getItem("roles")
    console.log(this.firstname)
  }

  getData() {
    let test:any = []
    this.service.getList().subscribe(res => {
      test =  res
      console.log(Object.values(test["data"]))
      this.convert(res)
    })
  }
  
  convert(data: any) {
    console.log(Object.values(data["data"]).length)
    let list = []
    for (let i = 0; i < Object.values(data["data"]).length; i++){
      // if (data["data"][i]["take"] == false) {
      //   data["data"][i]["take"] = 'ยังไม่ได้รับพัสดุ'
      // }
      list.push({
        "number": data["data"][i]["number"],
        "name": data["data"][i]["name"],
        "date": data["data"][i]["date"],
        "company": data["data"][i]["company"],
        "take": data["data"][i]["take"]
      })
      this.dataDisplay.data = list
      console.log(list) 
    }
  }

  constructor(private router: Router, private service: ServiceService) {

    this.dataDisplay = new MatTableDataSource(data);

    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
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
