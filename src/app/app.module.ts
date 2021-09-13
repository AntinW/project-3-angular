import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from "@angular/fire/compat"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {environment} from "../environments/environment";
import {CheckoutService} from "./shared/services/checkout.service";
import { CheckoutComponent } from './shopping/checkout/checkout.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'checkout', component: CheckoutComponent}
    ])
  ],
  providers: [
    CheckoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
