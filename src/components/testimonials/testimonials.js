import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
          <section id="testimonials" className="s-testimonials target-section">
        <div className="s-testimonials__bg" />
        <div className="row s-testimonials__header">
          <div className="column large-12">
            <h3>Hear What My Friends Says</h3>
          </div>
        </div>
        <div className="row s-testimonials__content">
          <div className="column">
            <div className="swiper-container testimonial-slider">
              <div className="swiper-wrapper">
                <div className="testimonial-slider__slide swiper-slide">
                  <div className="testimonial-slider__author">
                    <img src="images/avatars/user-02.jpg" alt="Author image" className="testimonial-slider__avatar" />
                    <cite className="testimonial-slider__cite">
                      <strong>S K Agrawal</strong>
                      <span>Student, KiiT University</span>
                    </cite>
                  </div>
                  <p>
                   He is a good boy !!!
                  </p>
                </div> 
                <div className="testimonial-slider__slide swiper-slide">
                  <div className="testimonial-slider__author">
                    <img src="images/avatars/user-03.jpg" alt="Author image" className="testimonial-slider__avatar" />
                    <cite className="testimonial-slider__cite">
                      <strong>Sk</strong>
                      <span>CEO, Google</span>
                    </cite>
                  </div>
                  <p>
                    Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                    Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                    Quasi voluptas eius distinctio. Atque eos maxime.
                  </p>
                </div> 
                <div className="testimonial-slider__slide swiper-slide">
                  <div className="testimonial-slider__author">
                    <img src="images/avatars/user-04.jpg" alt="Author image" className="testimonial-slider__avatar" />
                    <cite className="testimonial-slider__cite">
                      <strong>dk</strong>
                      <span>CEO, Microsoft</span>
                    </cite>
                  </div>
                  <p>
                    Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                    Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                    Voluptatem dignissimos ut.
                  </p>
                </div> {/* end testimonial-slider__slide */}
                <div className="testimonial-slider__slide swiper-slide">
                  <div className="testimonial-slider__author">
                    <img src="images/avatars/user-05.jpg" alt="Author image" className="testimonial-slider__avatar" />
                    <cite className="testimonial-slider__cite">
                      <strong>hk</strong>
                      <span>CEO, Amazon</span>
                    </cite>
                  </div>
                  <p>
                    Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis 
                    quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit. 
                    Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                  </p>
                </div> {/* end testimonial-slider__slide */}
              </div> {/* end testimonial slider swiper-wrapper */}
              <div className="swiper-pagination" />
            </div> {/* end swiper-container */}
          </div> {/* end column */}
        </div> {/* end row */}
      </section>
      
    );
  }
}