import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private d: DataService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      first: this.fb.control(''),
      last: this.fb.control(''),
      street: this.fb.control(''),
      apt: this.fb.control(''),
      city: this.fb.control(''),
      state: this.fb.control(''),
      zip: this.fb.control('')
    })
  }

  onSubmit(newData: any){
    console.log(newData)
    this.d.updateData(2, newData);
  }
  

}
