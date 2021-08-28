import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-header',
  template:`

  <div class="navbar is-danger">

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

      <div class="search-bar-end">
    <div class ="search-bar">
      <input class="search-txt" type ="text" name="" placeholder="Type something" [(ngModel)]="searchTerm" >
        <a class ="search-btn" href="#">
          <i class="fas fa-search"></i>
         </a>
    </div>
</div>

  

   


    </div>
    `,

  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Header';

  searchTerm:String="";
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params.searchTerm)
      this.searchTerm = params.searchTerm;
  }

    )};

}
