import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './services/products.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { SearchPipe } from './pipe/search.pipe';
import { OrderByPipe } from './pipe/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    ProductDetailsComponent,
    ProductsComponent,
    SearchPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
