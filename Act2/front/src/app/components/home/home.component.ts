import { Component, OnInit } from '@angular/core';
import { BandsService } from 'src/app/services/bands.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  Bands:any;

  constructor(
    private bandService:BandsService
  ){ }


  ngOnInit(): void {
    this.getBandsData();
  }


  getBandsData(){
    this.bandService.getBands().subscribe(reply => {
      console.log(reply);
      this.Bands=reply;
    })
  }

}
