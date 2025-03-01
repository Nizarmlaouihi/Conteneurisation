import { Component, OnInit } from '@angular/core';
import { ConsumerProductService } from 'src/app/services/consumer-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-count-product',
  templateUrl: './count-product.component.html',
  styleUrls: ['./count-product.component.css']
})
export class CountProductComponent implements OnInit {
  countResult: number | null = null;
  selectedCategory: string = '';

  constructor(private productService: ConsumerProductService, private router: Router) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

 

  goBack(): void {
    this.router.navigate(['/administration']);
  }
}
