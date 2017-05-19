import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[]=[];
  log = [];

constructor() { }

ngOnInit() {
}

onProductAdded(product: Product) {
  this.log.push(this.log.length + 1);
  this.products.push(product);
}
}
