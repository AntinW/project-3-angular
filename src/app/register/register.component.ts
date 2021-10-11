import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit
 {



    constructor() { }
      registerForm: any;
      ngOnInit(): void

     {
        this.registerForm = new FormGroup(
        {
            fName: new FormControl('', Validators.compose([
              Validators.required,
              Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)
            ])),
            lName: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)
            ])),

            uName: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')

            ])),

            addr: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')

            ])),
            num: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.minLength(10),
            Validators.maxLength(10)

            ])),

            mail: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
          pWord: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9@<>!?]+$'),
            Validators.minLength(6),
            Validators.maxLength(30)
          ])),
          confirm: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30)
          ])),
        })
     }

     get firstname(){return this.registerForm.get('fName');}
     get lastname(){return this.registerForm.get('lName');}
     get username(){return this.registerForm.get('uName');}
     get password(){return this.registerForm.get('pWord');}
     get address(){return this.registerForm.get('addr');}
     get number(){return this.registerForm.get('num');}
     get mail(){return this.registerForm.get('mail');}


 }
