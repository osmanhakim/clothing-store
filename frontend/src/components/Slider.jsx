import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Autoplay CSS
import "swiper/css/bundle";
import "./slider.css";
const Slider = () => {
  return (
    <Swiper
      spaceBetween={55}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 14,
        },
        768: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 30,
          pagination: false,
        },
        1200: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 30,
          pagination: false,
        },
      }}
    >
      {/* <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div> */}

      <SwiperSlide className="w-100">
        <div className="box">
          <img
            loading="lazy"
            src="http://127.0.0.1:8000/assets/images/home/demo3/slideshow-character1.png"
            width="542"
            height="733"
            alt="Woman Fashion 1"
            className=""
          />
          <div className="left">
            <div className="">
              <p className="">Dresses</p>
            </div>
            <h6 className="">New Arrivals</h6>
            <h2 className="">Night Spring</h2>
            <h2 className="">Dresses</h2>
            <button className="">Shop Now</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="w-100">
        <div className="box">
          <img
            loading="lazy"
            src="http://127.0.0.1:8000/assets/images/slideshow-character1.png"
            width="400"
            height="733"
            alt="Woman Fashion 1"
            className=""
          />
          <div className="left">
            <div className="">
              <p className="">Summer</p>
            </div>
            <h6 className="">New Arrivals</h6>
            <h2 className="">Night Spring</h2>
            <h2 className="">Dresses</h2>
            <button className="">Shop Now</button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="w-100">
        <div className="box">
          <img
            loading="lazy"
            src="http://127.0.0.1:8000/assets/images/slideshow-character2.png"
            width="400"
            height="733"
            alt="Woman Fashion 1"
            className=""
          />
          <div className="left">
            <div className="">
              <p className="">Summer</p>
            </div>
            <h6 className="">New Arrivals</h6>
            <h2 className="">Night Spring</h2>
            <h2 className="">Dresses</h2>
            <button className="">Shop Now</button>
          </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="overflow-hidden position-relative h-100">
          <div className="slideshow-character position-absolute bottom-0 pos_right-center">
            <img
              loading="lazy"
              src="http://127.0.0.1:8000/assets/images/slideshow-character1.png"
              width="400"
              height="733"
              alt="Woman Fashion 1"
              className="slideshow-character__img animate animate_fade animate_btt animate_delay-9 w-auto h-auto"
            />
            <div className="character_markup">
              <p className="text-uppercase font-sofia fw-bold animate animate_fade animate_rtl animate_delay-10">
                Summer
              </p>
            </div>
          </div>
          <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
            <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
              New Arrivals
            </h6>
            <h2 className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
              Night Spring
            </h2>
            <h2 className="h1 fw-bold animate animate_fade animate_btt animate_delay-5">
              Dresses
            </h2>
            <a
              href="#"
              className="btn-link btn-link_lg default-underline fw-medium animate animate_fade animate_btt animate_delay-7"
            >
              Shop Now
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="overflow-hidden position-relative h-100">
          <div className="slideshow-character position-absolute bottom-0 pos_right-center">
            <img
              loading="lazy"
              src="http://127.0.0.1:8000/assets/images/slideshow-character2.png"
              width="400"
              height="690"
              alt="Woman Fashion 2"
              className="slideshow-character__img animate animate_fade animate_rtl animate_delay-10 w-auto h-auto"
            />
          </div>
          <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
            <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
              New Arrivals
            </h6>
            <h2 className="h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
              Night Spring
            </h2>
            <h2 className="h1 fw-bold animate animate_fade animate_btt animate_delay-5">
              Dresses
            </h2>
            <a
              href="#"
              className="btn-link btn-link_lg default-underline fw-medium animate animate_fade animate_btt animate_delay-7"
            >
              Shop Now
            </a>
          </div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Slider;
