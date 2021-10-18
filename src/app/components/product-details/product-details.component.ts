import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { apiUrl } from '../../model/productConfig';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getProductDetails(`${ apiUrl._producturl }/${ params['productId'] }/`);
    });

  }

  private getProductDetails(_producturl: string) {
    this.productService.getProducts(_producturl).subscribe((data: any) => {
      this.productDetails = data;
    });
  }
}
