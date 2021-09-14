import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
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