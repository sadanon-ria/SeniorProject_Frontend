import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  constructor(private router: Router, private service: ServiceService) { }

  public firstname:any = ""
  public lastname:any = ""
  public roles: any = ""

  ngOnInit(): void {
    this.getLogin()
  }

  // insert data to database
  addOCR() {
    let data = {
      "number": this.number,
      "phone": this.phone,
      "name": this.name,
      "status": this.status,
      "company": this.selectedCompany,
      "take": this.take
    }
    console.log(data)
    this.service.addocr(data).subscribe(res => {
      console.log(res)
      this.router.navigate(['/upload'])
    })
    this.number = ""
    this.phone = ""
    this.name = ""
    this.status = false
    this.take = false
    this.selectedCompany = ""
  }
  number: string = ""
  phone: string = ""
  status: boolean = false
  take: boolean = false
  selectedCompany: string = ""

  express = [
    { value: 'flash', viewValue: 'Flash Express' },
    { value: 'kerry', viewValue: 'Kerry Express' },
    { value: 'thai-post', viewValue: 'Thai Post' },
    { value: 'best', viewValue: 'Best Express' },
    { value: 'jnt', viewValue: 'J&T Express' },
  ];

  close() {
    this.name = ""
    this.router.navigate(['/upload'])
  }

  // upload file image
  public emitsendObject: any
  public imageUrl: any

  public onFileSelected(event: any) {
    
    this.emitsendObject = event.target.files[0] as File;
    console.log(this.emitsendObject)
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(this.emitsendObject);
  }

  public name: string = ""
  
  public onUpload() {
    const formData = new FormData();
    let res_name = ""
    formData.append('files', this.emitsendObject, this.emitsendObject.name);
    console.log(this.emitsendObject)
    console.log(formData)
    this.service.upload(formData).subscribe(res => {
      console.log(Object(res).results[0].result[0]);
      res_name = Object(res).results[0].result[0]
      this.name = res_name
        // สามารถทำอย่างอื่นต่อได้ เช่น แสดงข้อความว่าอัพโหลดสำเร็จ
    });
  }

  // public sendfile(file: any) {
    
  //   if (file[0].type.includes('image')) {
  //     this.service.upload(file).subscribe(result => {
  //       this.emitsendObject = ({ message: result })
  //       // this.send_object(this.emitsendObject)
  //     })
  //   } else {
  //     console.log("please upload file only image type")
  //   }
  // }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  getLogin() {
    this.firstname = localStorage.getItem("firstname")
    this.lastname = localStorage.getItem("lastname")
    this.roles = localStorage.getItem("roles")
    console.log(this.firstname)
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
}
