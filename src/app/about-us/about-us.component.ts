import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  title = 'AboutUs';
  router: any;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['/About-Us']);
  }
}




