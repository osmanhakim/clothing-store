import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./details.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardActions } from "../store/card";
import { addProduct } from "../store/card";
// import "../css/product-details.css"; // Your custom styles
const Details = () => {
  const [active, setActive] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [num, setNum] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState();
  const dispatch = useDispatch();
  const lang = useSelector((state) => {
    return state.Auth.lang;
  });

  const card = useSelector((state) => {
    return state.Card.card;
  });

  const [big, setBig] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const { id } = useParams();
  const increment = () => {
    if (big == 3) {
      setBig(0);
    } else
      setBig((prev) => {
        return ++prev;
      });
  };

  const decrease = () => {
    if (big == 0) setBig(3);
    else
      setBig((prev) => {
        return --prev;
      });
  };
  useEffect(() => {
    const fetchDetails = async () => {
      const cs = await fetch("http://localhost:8000/sanctum/csrf-cookie", {
        credentials: "include",
      });

      if (!cs.ok) {
        alert("Failed to get CSRF token. Please try again.");
      }
      const response = await fetch("http://localhost:8000/api/details/" + id, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": lang,
        },
      });
      if (!response.ok) console.log("error while loading product");
      const data = await response.json();

      setList(data.imgs);
      console.log(data.data);
      setName(data.data.name);
      setPrice(data.data.price);
    };

    const fetchSizes = async () => {
      const response = await fetch("http://localhost:8000/api/itemSizes/" + id);
      const data = await response.json();
      console.log(data);
      setSizes(data.data);
      setQuantity(data.data[0].quantity);
      setSelectedSize(data.data[0].id);

      console.log(sizes);
    };

    fetchDetails();
    fetchSizes();
  }, [lang]);

  useEffect(() => {
    console.log("card", card);
  }, [card]);

  const [list, setList] = useState([]);

  return (
    <main className="pt-90">
      <div className="mb-md-1 pb-md-3"></div>
      <section className="product-single container">
        <div className="row">
          <div className="col-lg-7">
            <div
              className="product-single__media"
              data-media-type="vertical-thumbnail"
            >
              <div
                className="product-single__image"
                style={{ padding: "20px", paddingTop: "0px" }}
              >
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide product-single__image-item">
                      <img
                        loading="lazy"
                        className="h-auto"
                        src={list[big]}
                        width="674"
                        height="674"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-button-prev">
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      onClick={() => {
                        decrease();
                      }}
                      style={{
                        width: "10px",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_prev_sm" />
                    </svg>
                  </div>
                  <div className="swiper-button-next">
                    <svg
                      style={{
                        width: "10px",
                      }}
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        increment();
                      }}
                    >
                      <use href="#icon_next_sm" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="product-single__thumbnail">
                <div className="swiper-container">
                  <div
                    direction={"vertical"}
                    slidesPerGroup={1}
                    slidesPerView={3}
                    pagination={{
                      clickable: true,
                    }}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="swiper-wrapper"
                    id="thumbs"
                  >
                    {list.map((img, i) => {
                      return (
                        <div
                          className="h-auto"
                          key={i}
                          onClick={(e) => {
                            setActive(i);
                            setBig(i);
                            console.log(i);
                          }}
                        >
                          <img
                            loading="lazy"
                            src={img}
                            width="104"
                            height="104"
                            alt=""
                            className={active == i ? "active" : ""}
                          />
                        </div>
                      );
                    })}

                    {/* <div
                      className={index == 1 ? "active h-auto" : "h-auto"}
                      data="1"
                    >
                      <img
                        loading="lazy"
                        src=""
                        width="104"
                        height="104"
                        alt=""
                        onClick={onClickHandler}
                      />
                    </div>
                    <div
                      data="12"
                      className={index == 2 ? "active h-auto" : "h-auto"}
                    >
                      <img
                        loading="lazy"
                        src=""
                        width="104"
                        height="104"
                        alt=""
                        onClick={onClickHandler}
                      />
                    </div>
                    <div
                      data="3"
                      className={index == 3 ? "active h-auto" : "h-auto"}
                    >
                      <img
                        loading="lazy"
                        src=""
                        width="104"
                        height="104"
                        alt=""
                        onClick={onClickHandler}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="d-flex justify-content-between mb-4 pb-md-2">
              <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
                <a
                  href="#"
                  className="menu-link menu-link_us-s text-uppercase fw-medium"
                >
                  Home
                </a>
                <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">
                  /
                </span>
                <a
                  href="#"
                  className="menu-link menu-link_us-s text-uppercase fw-medium"
                >
                  The Shop
                </a>
              </div>
            </div>
            <h1 className="product-single__name">{name}</h1>
            <div className="product-single__rating">
              <div className="reviews-group d-flex">
                <svg
                  className="review-star"
                  viewBox="0 0 9 9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_star" />
                </svg>
                <svg
                  className="review-star"
                  viewBox="0 0 9 9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_star" />
                </svg>
                <svg
                  className="review-star"
                  viewBox="0 0 9 9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_star" />
                </svg>
                <svg
                  className="review-star"
                  viewBox="0 0 9 9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_star" />
                </svg>
                <svg
                  className="review-star"
                  viewBox="0 0 9 9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_star" />
                </svg>
              </div>
              <span className="reviews-note text-lowercase text-secondary ms-1">
                8k+ reviews
              </span>
            </div>
            <div className="product-single__price">
              <span className="current-price">${price}</span>
            </div>
            <div className="product-single__short-desc">
              <p>
                Elevate your wardrobe with our premium quality apparel, designed
                for comfort, durability, and effortless style. Whether you're
                dressing up for a special occasion or keeping it casual, our
                versatile collection offers the perfect balance of fashion and
                functionality. Made from carefully selected materials, each item
                ensures a flattering fit and long-lasting wear. Available in a
                range of sizes to suit every body type, with attention to detail
                that makes a difference.
              </p>
            </div>
            <div>
              <p>Sizes Available</p>
            </div>
            <form name="addtocart-form" method="post">
              <div className="product-single__addtocart">
                <div className="qty-control position-relative">
                  <select
                    name="size"
                    id="sizes"
                    onChange={(e) => {
                      setNum(0);
                      console.log(e.target);
                      sizes.find((elem) => {
                        if (elem.size.size === e.target.value) {
                          setQuantity(elem.quantity);
                          setSelectedSize(elem.id);
                        }
                      });
                    }}
                  >
                    {sizes.map((item) => {
                      console.log(item);
                      return (
                        <option value={item.size.size}>{item.size.size}</option>
                      );
                    })}
                  </select>
                  <input
                    type="number"
                    name="quantity"
                    value={num}
                    min="1"
                    className="qty-control__number text-center"
                  />
                  <div
                    className="qty-control__reduce"
                    style={{ paddingTop: "20px" }}
                    onClick={() => {
                      setNum((prev) => {
                        if (prev != 0) return --prev;
                        return prev;
                      });
                    }}
                  >
                    -
                  </div>
                  <div
                    className="qty-control__increase"
                    style={{ paddingTop: "20px" }}
                    onClick={() => {
                      setNum((prev) => {
                        if (prev < quantity) return ++prev;
                        return prev;
                      });
                    }}
                  >
                    +
                  </div>
                </div>

                {
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      dispatch(
                        addProduct({
                          id: selectedSize,
                          quantity: num,
                        })
                      );
                      setQuantity();
                    }}
                    type="submit"
                    className="btn btn-primary btn-addtocart js-open-aside"
                    data-aside="cartDrawer"
                    style={{ marginTop: "20px" }}
                  >
                    Add to Cart
                  </button>
                }
              </div>
            </form>
            <div className="product-single__meta-info">
              <div className="meta-item">
                <label>SKU:</label>
                <span>N/A</span>
              </div>
              <div className="meta-item">
                <label>Categories:</label>
                <span>Casual & Urban Wear, Jackets, Men</span>
              </div>
              <div className="meta-item">
                <label>Tags:</label>
                <span>biker, black, bomber, leather</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Details;

const Part = ({ img }) => {
  return (
    <SwiperSlide
      modules={[Autoplay, Pagination, Navigation]}
      className=""
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
    >
      <img
        loading="lazy"
        className="h-auto"
        src={img}
        width="674"
        height="674"
        alt=""
      />
      <a
        data-fancybox="gallery"
        href="../images/products/product_0.html"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Zoom"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="#icon_zoom" />
        </svg>
      </a>
    </SwiperSlide>
  );
};
