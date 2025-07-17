// Carousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Carousel = () => {
  const lang = useSelector((state) => {
    return state.Auth.lang;
  });
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://localhost:8000/api/categories", {
        headers: {
          "Content-Type": "Application/json",
          "Accept-Language": lang,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCats(data.data);
      }
    };
    getCategories();
  }, [lang]);
  return (
    <>
      <section
        className="category-carousel container mb-10"
        style={{ marginBottom: "100px" }}
      >
        <h2 className="section-title text-center mb-3 pb-xl-2 mb-xl-4">
          You Might Like
        </h2>

        <div className="position-relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={8}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false, // Continue after manual sliding
            }}
            Autoplay={true}
            modules={[EffectFade, Pagination, Navigation, Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 6,
                slidesPerGroup: 1,
                spaceBetween: 45,
                pagination: false,
              },
              1200: {
                slidesPerView: 8,
                slidesPerGroup: 1,
                spaceBetween: 60,
                pagination: false,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {cats &&
              cats.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="swiper-slide">
                      <img
                        style={{ borderRadius: "50%" }}
                        loading="lazy"
                        className="w-100 h-auto mb-3"
                        src={item.image}
                        alt=""
                      />
                      <div className="text-center">
                        <a href="#" className="menu-link fw-medium">
                          <br />
                          {item.name}
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Carousel;
