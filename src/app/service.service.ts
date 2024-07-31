import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  url = "https://cs403-m3uwkxxhna-as.a.run.app"

  getList(){
    return this.http.get(this.url+"/get_all_data");
  }

  addList(body:any) {
    return this.http.post(this.url+"/express",body)
  }

  getDetail() {
    return this.http.get(this.url+"/getdetail")
  }
  
  addToken(body:any) {
    return this.http.post(this.url+"/id_token",body)
  }

  getLineUser() {
    return this.http.get(this.url+"/token")
  }

  getSecurityUser() {
    return this.http.get(this.url+"/security")
  }

  finduid(idToken: string) {
    return this.http.get(`${this.url}/finduid/${idToken}`);
  }

  upload(files: any) {
    return this.http.post("https://cs403-m3uwkxxhna-as.a.run.app/perform-ocr-multiple",files);
  }

  addocr(data: any) {
    return this.http.post("https://cs403-m3uwkxxhna-as.a.run.app/addocr",data)
  }

  getParcel(idToken: any) {
    return this.http.get(`${this.url}/table/${idToken}`)
  }

  constructor(private http: HttpClient) { }
}
