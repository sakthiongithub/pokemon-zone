import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { ProductService } from '../../services/products.service';
import { mock } from '../../testing/mock';
import { ProductModel } from '../../model/products.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { OrderByPipe } from '../../pipe/sort-by.pipe';
import { SearchPipe } from '../../pipe/search.pipe';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let _productService: ProductService;
  let data: any;
  beforeEach(async(() => {
    data = {
      count: 10,
      previous: 'prevUrl',
      next: 'nextUrl',
      results: [{
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/"
      }]
    }
    _productService = mock<ProductService>({
      getProducts: jasmine.createSpy('getProducts').and.returnValue(of(data))
    })
    TestBed.configureTestingModule({
      declarations: [ProductsComponent, SearchPipe,
        OrderByPipe],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [{
        provide: ProductService, useValue: _productService
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    _productService = TestBed.get(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call product service', () => {
    //Then
    _productService.getProducts('testUrl').subscribe(data => {
      expect(component.products).toEqual(data);
      expect(component.allowNext).toEqual('nextUrl');
      expect(component.allowPrev).toBe('prevUrl');
      expect(component.products.results[0].productId).toEqual('1');
    })
  });

  it('should trigger item display event', () => {
    // Given
    const event = 50;
    //When
    component.onChangeObj(event);
    //Then
    _productService.getProducts('testUrl').subscribe(data => {
      expect(component.products).toEqual(data);
      expect(component.allowNext).toEqual('nextUrl');
      expect(component.allowPrev).toBe('prevUrl');
      expect(component.products.results[0].productId).toEqual('1');
    })
  })

  it('should sort item ', () => {
    // Given
    const event = 'name';
    //When
    component.onSortBy(event);
    //Then
    expect(component.orderByTerm).toEqual('name');
  })
});
