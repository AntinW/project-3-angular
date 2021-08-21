import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  template: `


  <section class ="hero is-primary is-fullheight has-text-centered">
  <div class="columns is-multiline">
    <div class="column is-one-quarter-desktop is-half-tablet">
      <div class="card">

        <div class="card-image">
            <figure class="image is-3by2">
              <img src="assets/image/c5.jpg" alt="">
            </figure>
            <div class="card-content is-overlay is-clipped">
              <span class="tag is-info">
                Details
              </span>       
            </div>
        </div>
      </div>
    </div>

    <div class="column is-one-quarter-desktop is-half-tablet">
      <div class="card">

        <div class="card-image">
            <figure class="image is-3by2">
              <img src="assets/image/c4.jpg" alt="">
            </figure>
            <div class="card-content is-overlay is-clipped">
              <span class="tag is-info">
                Details
              </span>       
            </div>
        </div>
      </div>
    </div>

    <div class="column is-one-quarter-desktop is-half-tablet">
      <div class="card">

        <div class="card-image">
            <figure class="image is-3by2">
              <img src="assets/image/c3.jpg" alt="">
            </figure>
            <div class="card-content is-overlay is-clipped">
              <span class="tag is-info">
                Details
              </span>       
            </div>
        </div>
      </div>
    </div>

    <div class="column is-one-quarter-desktop is-half-tablet">
      <div class="card">

        <div class="card-image">
            <figure class="image is-3by2">
              <a href="c2.jpg">
              <img src="assets/image/c2.jpg" alt="">
              </a>
            </figure>
            <div class="card-content is-overlay is-clipped">
              <span class="tag is-info">
                Details
              </span>       
            </div>
        </div>
      </div>
    </div>

    <div class="column is-one-quarter-desktop is-half-tablet">
      <div class="card">

        <div class="card-image">
            <figure class="image is-3by2">
              <img src="assets/image/c1.jpg" alt="">
            </figure>
            <div class="card-content is-overlay is-clipped">
              <span class="tag is-info">
                Details
              </span>       
            </div>
        </div>
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
export class GalleryPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
