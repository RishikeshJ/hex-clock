import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DatePipe]
})
export class AppComponent implements OnInit {
  title = 'hex-clock';
  public time = new Date();
  public hex: string;
  public gradient: string;
  bgImage:any;


  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
      this.hex = '#' + this.datepipe.transform(this.time, 'hhmmss');
      this.gradient = '#' + 90 + this.datepipe.transform(this.time, 'mss');
      this.bgImage = this.sanitizer.bypassSecurityTrustStyle('linear-gradient(-225deg,' + this.hex + ' 50%, ' + this.gradient+ ' 80%)');
    }, 1);
  }
  constructor(public datepipe: DatePipe, private sanitizer: DomSanitizer) {
    
  }

  

}