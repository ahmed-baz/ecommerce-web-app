import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/admin/lookups/model/country';
import { CountryService } from 'src/app/admin/lookups/services/country.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  totalQuantity: number;
  totalPrice: number;
  checkoutForm: FormGroup;
  formSignUp: FormGroup;
  selectedCountryItem: string;
  countryList: Country[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private cartSerive: CartService,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.findCountryList();
    this.updatecardStatus();
    this.buildCustomerForm();
    this.buildForm();
  }

  buildCustomerForm() {
    this.checkoutForm = this.formBuilder.group({
      customer: this.formBuilder.group({
        FirstName: [
          ,
          [
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(3),
            Validators.pattern('^[a-zA-Z]*$'),
          ],
        ],
        LastName: [
          ,
          [
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(3),
            Validators.pattern('^[a-zA-Z]*$'),
          ],
        ],
        Email: ['', [Validators.required, Validators.email]],
        Mobile: [
          '',
          [
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.maxLength(11),
            Validators.minLength(11),
          ],
        ],
      }),
      creditCard: this.formBuilder.group({
        cardType: ['', [Validators.required]],
        nameOnCard: ['', [Validators.required]],
        cardNumber: ['', [Validators.required]],
        securityCode: ['', [Validators.required]],
        expirationMonth: ['', [Validators.required]],
        expirationYear: ['', [Validators.required]],
      }),
      shippingAddress: this.formBuilder.group({
        Street: [
          '',
          [
            Validators.required,
            Validators.maxLength(20),
            // Validators.pattern('^[A-Za-z0-9]*$'),
          ],
        ],
        Country: ['', [Validators.required]],
        City: ['', [Validators.required]],
        Area: ['', [Validators.required]],
        ZipCode: [
          '',
          // [Validators.required, Validators.pattern('^[A-Za-z0-9]*$')],
        ],
      }),
      billingAddress: this.formBuilder.group({
        Street: [
          '',
          [
            Validators.required,
            Validators.maxLength(20),
            // Validators.pattern('^[A-Za-z0-9]*$'),
          ],
        ],
        Country: ['', [Validators.required]],
        City: ['', [Validators.required]],
        Area: ['', [Validators.required]],
        ZipCode: [
          '',
          //[Validators.required, Validators.pattern('^[A-Za-z0-9]*$')],
        ],
      }),
    });
  }

  buildForm() {
    this.formSignUp = this.formBuilder.group({
      FirstName: [
        ,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]*$'),
        ],
      ],
      LastName: [
        ,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]*$'),
        ],
      ],
      Email: ['name@example.com', [Validators.required, Validators.email]],
      Mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(11),
          Validators.minLength(11),
        ],
      ],
      Password: [
        ,
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.minLength(8),
          Validators.pattern('((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
        ],
      ],
    });
  }

  checkOut() {
    if (this.checkoutForm.valid) {
      console.log('checkOut');

      console.log(JSON.stringify(this.checkoutForm.value));
      let email = this.checkoutForm.controls['Email'].value;
      //or
      let firstName = this.checkoutForm.controls.FirstName.value;

      console.log(email);
      console.log(firstName);
    }
  }

  copyShippingAddressToBillingAddress(event) {
    console.log('Test');

    if (event.target.checked) {
      this.checkoutForm.controls.billingAddress.setValue(
        this.checkoutForm.controls.shippingAddress.value
      );
    } else {
      this.checkoutForm.controls.billingAddress.reset();
    }
  }

  updatecardStatus() {
    this.cartSerive.totalPrice.subscribe((data) => {
      this.totalPrice = data;
    });
    this.cartSerive.totalQuantity.subscribe((data) => {
      this.totalQuantity = data;
    });

    this.cartSerive.computeCartTotals();
  }

  findCountryList() {
    this.countryService.findCountryList().subscribe((data) => {
      this.countryList = data;
    });
  }
  findCityList() {
    this.countryService.findCountryList().subscribe((data) => {
      this.countryList = data;
    });
  }
  findAreaList() {
    this.countryService.findCountryList().subscribe((data) => {
      this.countryList = data;
    });
  }
}
