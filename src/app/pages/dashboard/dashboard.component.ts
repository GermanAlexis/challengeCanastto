import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getCategoyProduc().subscribe((resp) => {
      console.log(resp);
    })
  }

}
