import { Component, OnInit } from '@angular/core';
import {FetchdataService } from '../fetchdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public frontdata = [];
  constructor(private _serve:FetchdataService) { }

  
  ngOnInit(){

    this._serve.getCoins().subscribe(data => this.frontdata = data
    );
    console.log(this.frontdata);
  }

}
