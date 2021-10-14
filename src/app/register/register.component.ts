import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService} from '../services/register/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit
 {
    registerForm: FormGroup;
    constructor(
    public userApi: UserService,
    public fb: FormBuilder) { }

      ngOnInit(): void

     {
       this.userApi.GetUsersList();
       this.userForm();
     }


     userForm(){
     this.registerForm = this.fb.group({
                 firstName:['',[Validators.required,
                   Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)
                 ]],
                 lastName: ['',[
                 Validators.required,
                 Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)
                 ]],

                 address: ['',[
                 Validators.required,
                 Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')

                 ]],
                 number: ['',[
                 Validators.required,
                 Validators.pattern('^[0-9]*$'),
                 Validators.minLength(10),
                 Validators.maxLength(10)

                 ]],

                 mail: ['',[
                 Validators.required,
                 Validators.minLength(6),
                 Validators.maxLength(30),
                 Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                 ]],
             })
     }

     get firstName(){return this.registerForm.get('firstName');}
     get lastName(){return this.registerForm.get('lastName');}
     get address(){return this.registerForm.get('address');}
     get number(){return this.registerForm.get('number');}
     get mail(){return this.registerForm.get('mail');}

    submitForm(){
    this.userApi.AddUser(this.registerForm.value);
    this.registerForm.reset();
    window.alert("Successfully Registered for Future Promotion Notifications");
    }

get f() {
     return this.registerForm.controls;
 }


 }
