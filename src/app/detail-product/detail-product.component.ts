import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductSService } from '../services/product-s.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
id!:number
p!:Product
  constructor(private Act:ActivatedRoute,private ps:ProductSService){}

  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
    this.p=this.ps.listProduct[this.id]
  }
}
