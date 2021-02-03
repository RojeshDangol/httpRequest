import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { ListComponent } from '../list/list.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  data!: any;

  constructor(private d: DataService) { }

  ngOnInit(): void {
    //this.data = this.d.get();
    this.d.getData()
          .subscribe(newD => this.data = newD);
          
  }

}
