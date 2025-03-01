import { Component } from '@angular/core';
import { ConsumerProductService } from 'src/app/services/consumer-product.service';


@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent {
goBack() {
throw new Error('Method not implemented.');
}
  searchResults: any[] = [];
  searchTerm: string = '';


  constructor(private productService: ConsumerProductService) {}

  
}
