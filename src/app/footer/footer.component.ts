import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`
  
  <footer class="footer2">
  <div class="container content has-text-centered ">
   <a class="button is-medium is-facebook">
    <span class="icon">
      <i class="fab fa-facebook fa-lg"></i>
    </span>
  </a>

<a class="button is-medium is-instagram" href="https://www.instagram.com/nothingbattercakes_/">
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
  title = 'Footer';

  constructor() { }

  ngOnInit(): void {
  }

}
