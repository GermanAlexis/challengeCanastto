import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product, Productdata } from '../../interfaces/interfacesProducts';

const base_url_image = environment.url_image
@Component({
  selector: 'app-categoryone',
  templateUrl: './categoryone.component.html',
  styleUrls: ['./categoryone.component.css']
})
export class CategoryoneComponent implements OnInit {

  @Input() product_data!: Productdata
  image = ''
  constructor() { }

  ngOnInit(): void {
      this.image = `${base_url_image}${ this.product_data.ean }-80@3x.jpg`
    }

}
