import React from "react";
import './Footer.scss';

export default function Footer() {

  return (
    <>
      <footer class="text-center text-lg-start footer">
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-3">
                <img id="brand-footer" src="/vusic_icon.png" alt="vusic-icon"></img>
                <p>
                  Created by Jiaqi Liu, Neerav Patel, and David Claveau.
                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
                <h6 class="text-uppercase mb-3 footer-titles">
                  Top Artists
                </h6>
                <p>
                  <a href="#!" class="text-reset">Popularity</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Followers</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Genres</a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-3">
                <h6 class="text-uppercase mb-3 footer-titles">
                  Top Tracks
                </h6>
                <p>
                  <a href="#!" class="text-reset">Popularity</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Release Years</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Analysis</a>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-3">
                <h6 class="text-uppercase mb-3 footer-titles">
                  Contact
                </h6>
                <p>
                  Canada
                </p>
                <p>
                  info@example.com
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-4">
          2021
        </div>
      </footer>
    </>
  );
}
