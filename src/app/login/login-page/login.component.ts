import { ViewChild, ElementRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { liff } from '@line/liff';


import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

type UnPromise<T> = T extends Promise<infer X> ? X : T;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [],
})
export class LoginComponent implements OnInit {
  os: ReturnType<typeof liff.getOS>;
  profile!: UnPromise<ReturnType<typeof liff.getProfile>>;
 
  name: string = '';
  idToken: string = '';

  constructor(private router: Router, private service:ServiceService) {
  }

  // ngOnInit() {
  //   new Promise<LIFFUserProfile>(resolve => {
  //     liff.init(data => {
  //       resolve(liff.getProfile());
  //     }, err => {
  //       // LIFF initialization failed
  //       // err.code;
  //     });
  //   })
  //     .then((profile) => {
  //       this.profile = profile;
  //       if (profile.displayName === 'CK Sun') {
  //         this.message = 'Hello';
  //       } else {
  //         this.message = 'Hi';
  //       }
  //     });
  // }
  

  // ngOnInit(): void {
    // liff.init({liffId:'2004090496-dKy6vmJy'}).then(()=>{
    //   this.os = liff.getOS();
    //   if(liff.isLoggedIn()){
    //     liff.getProfile().then(profile => {
    //       this.profile = profile;
    //       console.log(profile)
    //     }).catch(console.error);
    //   }else{
    //     liff.login()
    //   }
    // }).catch(console.error);
  // }

  ngOnInit(): void {
    this.liff_token()
  }

  liff_token(): void {
    liff.init({
      liffId: '2004090496-dKy6vmJy'
    }).then(() => {
      this.os = liff.getOS();
      if (liff.isLoggedIn()) {
        liff.getProfile().then(profile => {

          let test: any = []
          let id = profile.userId
          console.log(id)
          this.service.finduid(id).subscribe(res => {
            test = res
            console.log(test)
            console.log("81",test["data"])
            if (test["data"] != null) {
              this.router.navigate(['/success']);
            }
          })

          this.profile = profile;
          console.log(this.profile)
        }).catch(console.error);
        
        const idToken = liff.getIDToken();
        if (idToken) {
          this.idToken = idToken.toString();
          console.log(this.idToken);
        }
      } else {
        liff.login();
      }
    }).catch(console.error);
  }
  
  liff_profile(): void {
    liff.init({
      liffId: '2004090496-dKy6vmJy'
    }).then(() => {
      this.os = liff.getOS();
      if (liff.isLoggedIn()) {
        
        liff.getProfile().then(profile => {

          let test: any = []
          let id = profile.userId
          console.log(id)
          this.service.finduid(id).subscribe(res => {
            test = res
            console.log(test)
            console.log("117",test["data"])
            if (test["data"] != null) {
              this.router.navigate(['/success']);
            }
          })

          this.profile = profile;
          console.log(this.profile)
        }).catch(console.error);
      } else {
        liff.login();
      }
    }).catch(console.error);
    console.log(JSON.stringify(this.profile));
  }

  addToken() {
    console.log(this.idToken)
    let data = {
      "idToken": this.idToken,
      "name": this.name
    }
    console.log(data)
    this.service.addToken(data).subscribe(res => {
      this.router.navigate(['/success']);
    })
    
  }

  close() {
    liff.closeWindow()
  }
}
