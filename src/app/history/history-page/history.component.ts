import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { ServiceService } from 'src/app/service.service';

export interface UserData {
  number: number;
  phone: string;
  name: any;
  date: Date;
  company: any;
  take: any;
}


const data: UserData[] = []

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  display: any[] = ['number', 'phone', 'name', 'date', 'company', 'take'];
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
        "phone": data["data"][i]["phone"],
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

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id:id,
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
