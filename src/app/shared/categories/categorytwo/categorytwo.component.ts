import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Productdata } from '../../interfaces/interfacesProducts';

const base_url_image = environment.url_image

@Component({
  selector: 'app-categorytwo',
  templateUrl: './categorytwo.component.html',
  styleUrls: ['./categorytwo.component.css']
})
export class CategorytwoComponent implements OnInit {

  @Input() product_data!: Productdata
  image = ''

  constructor() { }

  ngOnInit(): void {
    this.image = `${base_url_image}${ this.product_data.ean }@3x.jpg`
  }

}
