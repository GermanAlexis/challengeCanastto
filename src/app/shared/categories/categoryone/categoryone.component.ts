import { Component, Input, OnInit } from '@angular/core';
import { Product, Productdata } from '../../interfaces/interfacesProducts';

@Component({
  selector: 'app-categoryone',
  templateUrl: './categoryone.component.html',
  styleUrls: ['./categoryone.component.css']
})
export class CategoryoneComponent implements OnInit {

  @Input() product_data!: Productdata

  constructor() { }

  ngOnInit(): void {
  }

}
