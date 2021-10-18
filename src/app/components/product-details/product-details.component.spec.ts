import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from '../../services/products.service';
import { mock } from '../../testing/mock';
import { ProductModel } from '../../model/products.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let _productService : ProductService;
  let route: ActivatedRoute;
  let data: any;

  beforeEach(async () => {
    route = mock<ActivatedRoute>({
      queryParams: of({
        productId: 1
      })
    })
    data = {
      "abilities": [
        {
          "ability": {
            "name": "keen-eye",
            "url": "https://pokeapi.co/api/v2/ability/51/"
          }
        },
        {
          "ability": {
            "name": "sniper",
            "url": "https://pokeapi.co/api/v2/ability/97/"
          }
        }
      ]
    }
    _productService = mock<ProductService>({
      getProducts : jasmine.createSpy('getProducts').and.returnValue(of(data))
    })
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [{
          provide: ProductService, useValue: _productService
        },{
          provide: ActivatedRoute, useValue: route
        }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    _productService = TestBed.get(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should call product service', () => {
    //Then
    _productService.getProducts('testUrl').subscribe(data => {
      expect(component.productDetails).toEqual(data);
    })
  });
});
