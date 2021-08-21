import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`
    <footer class="footer is-dark">
      <div class="container content has-text-centered is-dark">
      
      <a class="button is-medium is-facebook">
        <span class="icon">
          <i class="fab fa-facebook fa-lg"></i>
        </span>
      </a>
  
      <a class="button is-medium is-instagram">
        <span class="icon">
          <i class="fab fa-instagram fa-lg"></i>
        </span>
      </a>
      

      <a class="button is-medium is-twitter">
        <span class="icon">
          <i class="fab fa-twitter fa-lg"></i>
        </span>
      </a>

      </div>
      </footer>
  
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
