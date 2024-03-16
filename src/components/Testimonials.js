import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../sliderProps";
import { dataImage, imgToSVG } from "../utilits";
const Testimonials = ({ testimonials }) => {
  useEffect(() => {
    dataImage();
    // imgToSVG();
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_testimonials">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Testimonial</span>
            <h3>What Clients Say</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div
            className="testimonials_list wow fadeInUp"
            data-wow-duration="1s"
          >
            <Swiper
              {...testimonialsSlider}
              className="owl-carousel owl-theme owl-loaded"
            >
              {testimonials.map((testimonial, i) =>
                <SwiperSlide key={i}>
                  <div className="list_inner">
                    <img className="svg" src="img/svg/quote.svg" alt="" />
                    <p className="text">
                      {testimonial.review}
                    </p>
                    <div className="details">
                      <div className="image">
                        <div
                          className="main"
                          data-img-url={testimonial.image?.url}
                        />
                      </div>
                      <div className="short">
                        <h3>{testimonial.name}</h3>
                        <span>{testimonial.position}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )}


              <div className="owl-dots"></div>
            </Swiper>
            <div
              className="shape moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
            <div
              className="shape_2 moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
