import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CheckoutService} from "../../shared/services/checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  formVar!: FormGroup;
  constructor(private fb: FormBuilder, private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.formVar = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: ''
    });
  }

  onSubmit(data:any) {
    console.log(data);

    this.checkoutService.create(data);
  }

}
