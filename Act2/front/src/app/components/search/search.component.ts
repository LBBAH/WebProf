import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Band } from 'src/app/services/band';
import { BandsService } from 'src/app/services/bands.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit{

  myControl = new FormControl('');
  options !: Band[];

  FinalData !: Observable<Band[]>;


  constructor(private service:BandsService){
    this.service.getBand().subscribe(item =>{
      this.options=item;
    })
  }

  ngOnInit(): void {
    this.FinalData=this.myControl.valueChanges.pipe(
      startWith(''),
      map(item=>{
        const name=item;
        return name?this._filter(name as string):this.options
      })
    )
  }

  SelectBand(name:any){
    console.log(name);
  }

  private _filter(name:string):Band[]{
    const filterValue=name.toLocaleLowerCase();
    return this.options.filter(opt=>opt.name.toLocaleLowerCase().includes(filterValue));
  }

}
