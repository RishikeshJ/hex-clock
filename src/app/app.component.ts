import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DatePipe]
})
export class AppComponent implements OnInit{
  title = 'hex-clock';
  public time = new Date();
  public hex: string;


  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
      this.hex = '#' + this.datepipe.transform(this.time, 'hhmmss');
      console.log(this.hex);
    }, 1);
  }
  constructor(public datepipe: DatePipe) {}


}


