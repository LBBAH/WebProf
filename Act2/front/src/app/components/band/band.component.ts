import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandsService } from 'src/app/services/bands.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})

export class BandComponent implements OnInit {
  id:any;
  Bands:any;

  constructor(
    private activeRouter:ActivatedRoute,
    private bandService:BandsService,
    private router: Router
  ){
    
  }

  getBandId(){
    this.id=this.activeRouter.snapshot.paramMap.get('id');    
    console.log(this.id);

    this.bandService.findBandId(this.id).subscribe(reply=>{
        let array = Object.entries(reply);        
        if(array[0][0]=="warning"){
          this.router.navigate(['404']);
        }else{
          console.log(reply);        
          this.Bands=reply;
        }      
      }
    )
  }

  ngOnInit(): void {
    this.getBandId();
  }


}
