import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`

  <div class="navbar is-dark">

      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/image/Logo.jpg">
        </a>
      </div>
    
      <div class="navbar-menu">
        <div class="navbar-start ">
          <a class="navbar-item" routerLink="/">Home</a>
          <a class="navbar-item" routerLink="/gallery-page">Gallery</a>
        
        </div>
      </div>
    </div>
    `,

  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
