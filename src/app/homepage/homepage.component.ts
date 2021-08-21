import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <section class ="hero is-primary is-fullheight has-text-centered">
      <div class="hero-body">

          <div class="columns is-full">
            <div class="column">
              <img src="assets/image/cover.jpg">
            </div>
          </div>
      </div>

      <div class="hero-body">
        <div class="columns">
          <div class="column is-one-third">
            <img src="assets/image/c5.jpg">
          </div>

          <div class="column is-one-third">
            <img src="assets/image/c3.jpg">
          </div>

          <div class="column is-one-third">
            <img src="assets/image/c4.jpg">
          </div>

        </div>
      </div>



    </section>


  `,
  styles: [`
    .hero{
      background-image: url('/assets/image/background.jpg') !important;
      background-size: cover;
      background-position:center center;
    }
  `]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
