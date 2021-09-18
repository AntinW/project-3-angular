import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'HomePage';
  
  searchTerm:String="";
  constructor(private route:ActivatedRoute) { }



  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params.searchTerm)
      this.searchTerm = params.searchTerm;
  }

    )};

}