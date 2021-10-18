import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct, ProductModel } from '../model/products.model';
import { apiUrl } from '../model/productConfig';

@Injectable()
export class ProductService {

  constructor(private _http: HttpClient) { }

  getProducts(_producturl: string): Observable<ProductModel> {
    let response = this._http.get<ProductModel>(_producturl)
    return response;
  }
}
