import { Component } from '@angular/core';
import { Product, ProductsService } from '../../services/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();
  }
}