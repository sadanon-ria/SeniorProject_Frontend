import { Component } from '@angular/core';
import { liff } from '@line/liff';

@Component({
  selector: 'app-successpage',
  templateUrl: './successpage.component.html',
  styleUrls: ['./successpage.component.css']
})
export class SuccesspageComponent {
  close(): void{
    liff.closeWindow()
  }
}
