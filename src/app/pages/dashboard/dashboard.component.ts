import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Category, Product, ResponseProduct } from 'src/app/shared/interfaces/interfacesProducts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getCategoyProduc().subscribe((resp: ResponseProduct) => {
      this.categories = resp.categories.sort((a,b) => a.ordinal - b.ordinal)
      this.products = resp.products.sort((a,b) => a.product_data.categories[0].ordinal - b.product_data.categories[0].ordinal)
    })
  }

}
