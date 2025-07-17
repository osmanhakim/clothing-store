import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Autoplay CSS
import "swiper/css/bundle";
import { useSelector } from "react-redux";
import "./hot.css";
import { useEffect, useState } from "react";
const Hot = () => {
  const lang = useSelector((state) => {
    return state.Auth.lang;
  });
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchHot = async () => {
      const response = await fetch("http://localhost:8000/api/hot", {
        headers: {
          "Content-Type": "Application/json",
          "Accept-Language": lang,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.data) {
          setProducts(data.data);
        }
      }
    };
    try {
      fetchHot();
    } catch (ex) {
      console.log(ex);
    }
  }, [lang]);
  return (
    <>
      <section className="hot-deals container mb-5">
        <h2 className="section-title text-center mb-3 pb-xl-3 mb-xl-4">
          Hot Deals
        </h2>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-20per d-flex align-items-center flex-column justify-content-center py-4 align-items-md-start">
            <h2>Summer Sale</h2>
            <h2 className="fw-bold">Up to 60% Off</h2>

            {/* <div
              className="position-relative d-flex align-items-center text-center pt-xxl-4 js-countdown mb-3"
              data-date="18-3-2024"
              data-time="06:50"
            >
              <div className="day countdown-unit">
                <span className="countdown-num d-block"></span>
                <span className="countdown-word text-uppercase text-secondary">
                  Days
                </span>
              </div>

              <div className="hour countdown-unit">
                <span className="countdown-num d-block"></span>
                <span className="countdown-word text-uppercase text-secondary">
                  Hours
                </span>
              </div>

              <div className="min countdown-unit">
                <span className="countdown-num d-block"></span>
                <span className="countdown-word text-uppercase text-secondary">
                  Mins
                </span>
              </div>

              <div className="sec countdown-unit">
                <span className="countdown-num d-block"></span>
                <span className="countdown-word text-uppercase text-secondary">
                  Sec
                </span>
              </div>
            </div> */}

            <a
              href="#"
              className="btn-link default-underline text-uppercase fw-medium mt-3"
            >
              View All
            </a>
          </div>
          <div className="col-md-6 gap-5 col-lg-8 col-xl-80per">
            <div className="position-relative">
              <Swiper
                spaceBetween={30}
                centeredSlides={false}
                slidesPerView={3}
                slidesPerGroup={1}
                loopFillGroupWithBlank={true}
                loop={true}
                effect={"fade"}
                autoplay={{
                  delay: 3000, // Slide every 3 seconds (adjust as needed)
                  disableOnInteraction: false, // Continue autoplay after manual navigation
                  pauseOnMouseEnter: true, // Pause on hover (optional)
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="swiper"
              >
                {products &&
                  products.map((item) => {
                    console.log(item);
                    return (
                      <Cp
                        img={item.image[0].path}
                        title={item.product[0].name}
                        price={item.product[0].price}
                        key={item.product.id}
                      />
                    );
                  })}

                {/* </div> */}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hot;

const Cp = ({ img, title, price }) => {
  return (
    <SwiperSlide className="swiperslide">
      <div className="product-image">
        <a href="details.html">
          <img loading="lazy" src={img} alt={title} className="img-fluid" />
        </a>
      </div>

      <div className="product-info">
        <h6 className="product-title">
          <a href="details.html">{title}</a>
        </h6>
        <p className="price">${price}</p>
        <div className="onhover"></div>
        <div className="product-actions">
          <button className="add-to-cart" title="Add to cart">
            Add To Cart
          </button>
          <a href="#" className="quick-view">
            Quick View
          </a>
        </div>
      </div>
    </SwiperSlide>
  );
};
