import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { apiUrl } from '../../model/productConfig';
import { ActivatedRoute } from '@angular/router';
import { ProductModel, IProduct } from '../../model/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title = 'pokemon-zone';
  products: ProductModel;
  allowNext: string;
  allowPrev: string;
  selectedItem = 20;
  terms: string;
  itemsPerPage = [10, 20, 50];
  sortItems = ['name', 'height'];
  limit = 0;
  offset = 20;
  orderByTerm = 'height';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts(apiUrl._producturl);
  }

  private getProducts(_producturl: string) {
    const limit = 20;
    const offset = 0;
    this.productService.getProducts(`${ _producturl }?limit=${ limit }&offset=${ offset }`).subscribe((data: ProductModel) => {
      this.products = data;
      this.allowNext = data.next;
      this.allowPrev = data.previous;
      this.products.results.forEach((element: IProduct, index: number) => {
        this.products.results[index]['productId'] = this.products.results[index]['url'].split("/")[6];
      });
    });
  }

  paginationEvent(event: string) {
    this.getProducts(event);
  }

  onChangeObj(event: number) {
    const limit = event;
    const offset = 0;
    this.productService.getProducts(`${ apiUrl._producturl }?limit=${ limit }&offset=${ offset }`).subscribe((data: any) => {
      this.products = data;
      this.allowNext = data.next;
      this.allowPrev = data.previous;
      this.products.results.forEach((element: IProduct, index: number) => {
        this.products.results[index]['productId'] = this.products.results[index]['url'].split("/")[6];
      });
    });
  }

  onSortBy(event: string) {
    this.orderByTerm = event;
  }
}
