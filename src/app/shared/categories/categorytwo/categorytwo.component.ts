import { Component, Input, OnInit } from '@angular/core';
import { Productdata } from '../../interfaces/interfacesProducts';

@Component({
  selector: 'app-categorytwo',
  templateUrl: './categorytwo.component.html',
  styleUrls: ['./categorytwo.component.css']
})
export class CategorytwoComponent implements OnInit {

  @Input() product_data!: Productdata 

  constructor() { }

  ngOnInit(): void {
  }

}
