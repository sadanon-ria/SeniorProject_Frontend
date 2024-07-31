import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

export interface UserData {
  idToken: string;
  name: any;
}

export interface SecurityData {
  username: string;
  firstname: string;
  lastname: string;
  roles: string;
}

const data: UserData[] = []
const dataS: SecurityData[] = []

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
  
export class SummaryComponent {
  constructor(private router: Router, private service: ServiceService) {
    this.dataDisplay = new MatTableDataSource(data);
    this.sdataDisplay = new MatTableDataSource(dataS);
  }
  
  // ส่วนที่ใช้ในการเลือกว่าจะโชว์ table ไหน
  selectedTable: string = '';
  showTable(table: string) {
    console.log(table)
    this.selectedTable = table;
  }

  // table 1
  display: any[] = ['idToken', 'name'];
  dataDisplay: MatTableDataSource<UserData>;
  // table 2
  sdisplay: any[] = ['username', 'firstname', 'lastname', 'roles'];
  sdataDisplay: MatTableDataSource<SecurityData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  public firstname:any = ""
  public lastname:any = ""
  public roles:any = ""

  ngOnInit(): void {
    this.getData()
    this.getSecurityData()
    this.getLogin()
  }
  getLogin() {
    this.firstname = localStorage.getItem("firstname")
    this.lastname = localStorage.getItem("lastname")
    this.roles = localStorage.getItem("roles")
    console.log(this.firstname)
  }
  public logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
// line user (table 1)
  getData() {
    let test:any = []
    this.service.getLineUser().subscribe(res => {
      test =  res
      console.log(Object.values(test["data"]))
      this.convert(res)
    })
  }
  convert(data: any) {
    console.log(Object.values(data["data"]).length)
    let list = []
    for (let i = 0; i < Object.values(data["data"]).length; i++){
      list.push({
        "idToken": data["data"][i]["idToken"],
        "name": data["data"][i]["name"],
      })
      this.dataDisplay.data = list
      console.log(list)
    }
  }
// user addmin & security (table 2)
  getSecurityData() {
    let testSecurity:any = []
    this.service.getSecurityUser().subscribe(res => {
      testSecurity =  res
      console.log(Object.values(testSecurity["data"]))
      this.convertSecurity(res)
    })
  }
  convertSecurity(dataS: any) {
    console.log(Object.values(dataS["data"]).length)
    let listSecurity = []
    for (let i = 0; i < Object.values(dataS["data"]).length; i++){
      listSecurity.push({
        "username": dataS["data"][i]["username"],
        "firstname": dataS["data"][i]["firstname"],
        "lastname": dataS["data"][i]["lastname"],
        "roles": dataS["data"][i]["roles"],
      })
      this.sdataDisplay.data = listSecurity
      console.log(listSecurity)
    }
  }

  ngAfterViewInit() {
    this.dataDisplay.paginator = this.paginator;
    this.dataDisplay.sort = this.sort;
    this.sdataDisplay.paginator = this.paginator;
    this.sdataDisplay.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataDisplay.filter = filterValue.trim().toLowerCase();
    this.sdataDisplay.filter = filterValue.trim().toLowerCase();

    if (this.dataDisplay.paginator) {
      this.dataDisplay.paginator.firstPage();
      this.sdataDisplay.paginator?.firstPage();
    }
  }


  // path ตรง nav
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
