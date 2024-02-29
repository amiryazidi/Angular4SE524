import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductSService } from '../services/product-s.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  priceMax!:number;
  listProduct:Product[]=[]

  //Injection du service
  constructor(private ps:ProductSService){}

  //Remplire listProduct avec la liste du service
  ngOnInit(){
    this.listProduct=this.ps.listProduct

  }

  increment(id:number){
    this.listProduct[id].like++;
  }
  buy(i:number){
    this.listProduct[i].quantity--;

  }
}
