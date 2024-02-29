import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductSService } from '../services/product-s.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private ps :ProductSService){}
  registerForm=new FormGroup({
    id:new FormControl('',Validators.required),
    title:new FormControl('',[Validators.required,Validators.minLength(5)]),
    price:new FormControl('',[Validators.required,Validators.min(0)]),
    quantity:new FormControl('',[Validators.required,Validators.min(0)]),
    like:new FormControl('',[Validators.required,Validators.min(0)])
  })

  save(){
    console.log(this.registerForm.value)
    this.ps.addproduct(this.registerForm.value as any)
  }
  reset(){
    this.registerForm.reset()
  }
}
