import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className="shop-list flex-grow-1">
      <div
        className="swiper-container js-swiper-slider slideshow slideshow_small slideshow_split"
        data-settings='{
            "autoplay": {
              "delay": 5000
            },
            "slidesPerView": 1,
            "effect": "fade",
            "loop": true,
            "pagination": {
              "el": ".slideshow-pagination",
              "type": "bullets",
              "clickable": true
            }
          }'
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slide-split h-100 d-block d-md-flex overflow-hidden">
              <div
                className="slide-split_text position-relative d-flex align-items-center"
                style={{ backgroundColor: "#f5e6e0" }}
              >
                <div className="slideshow-text container p-3 p-xl-5">
                  <h2 className="text-uppercase section-title fw-normal mb-3 animate animate_fade animate_btt animate_delay-2">
                    Women's <br />
                    <strong>ACCESSORIES</strong>
                  </h2>
                  <p className="mb-0 animate animate_fade animate_btt animate_delay-5">
                    Accessories are the best way to update your look. Add a
                    title edge with new styles and new colors, or go for
                    timeless pieces.
                  </p>
                </div>
              </div>
              <div className="slide-split_media position-relative">
                <div
                  className="slideshow-bg"
                  style={{ backgroundColor: "#f5e6e0" }}
                >
                  <img
                    loading="lazy"
                    src="http://localhost:8000/assets/images/shop/shop_banner3.jpg"
                    width="630"
                    height="450"
                    alt="Women's accessories"
                    className="slideshow-bg__img object-fit-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="slide-split h-100 d-block d-md-flex overflow-hidden">
              <div
                className="slide-split_text position-relative d-flex align-items-center"
                style={{ backgroundColor: "#f5e6e0" }}
              >
                <div className="slideshow-text container p-3 p-xl-5">
                  <h2 className="text-uppercase section-title fw-normal mb-3 animate animate_fade animate_btt animate_delay-2">
                    Women's <br />
                    <strong>ACCESSORIES</strong>
                  </h2>
                  <p className="mb-0 animate animate_fade animate_btt animate_delay-5">
                    Accessories are the best way to update your look. Add a
                    title edge with new styles and new colors, or go for
                    timeless pieces.
                  </p>
                </div>
              </div>
              <div className="slide-split_media position-relative">
                <div
                  className="slideshow-bg"
                  style={{ backgroundColor: "#f5e6e0" }}
                >
                  <img
                    loading="lazy"
                    src="http://localhost:8000/assets/images/shop/shop_banner3.jpg"
                    width="630"
                    height="450"
                    alt="Women's accessories"
                    className="slideshow-bg__img object-fit-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="slide-split h-100 d-block d-md-flex overflow-hidden">
              <div
                className="slide-split_text position-relative d-flex align-items-center"
                style={{ backgroundColor: "#f5e6e0" }}
              >
                <div className="slideshow-text container p-3 p-xl-5">
                  <h2 className="text-uppercase section-title fw-normal mb-3 animate animate_fade animate_btt animate_delay-2">
                    Women's <br />
                    <strong>ACCESSORIES</strong>
                  </h2>
                  <p className="mb-0 animate animate_fade animate_btt animate_delay-5">
                    Accessories are the best way to update your look. Add a
                    title edge with new styles and new colors, or go for
                    timeless pieces.
                  </p>
                </div>
              </div>
              <div className="slide-split_media position-relative">
                <div
                  className="slideshow-bg"
                  style={{ backgroundColor: "#f5e6e0" }}
                >
                  <img
                    loading="lazy"
                    src="http://localhost:8000/assets/images/shop/shop_banner3.jpg"
                    width="630"
                    height="450"
                    alt="Women's accessories"
                    className="slideshow-bg__img object-fit-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container p-3 p-xl-5">
          <div className="slideshow-pagination d-flex align-items-center position-absolute bottom-0 mb-4 pb-xl-2"></div>
        </div>
      </div>

      <div className="mb-3 pb-2 pb-xl-3"></div>

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

        <div className="shop-acs d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
          <select
            className="shop-acs__select form-select w-auto border-0 py-0 order-1 order-md-0"
            aria-label="Sort Items"
            name="total-number"
          >
            <option selected>Default Sorting</option>
            <option value="1">Featured</option>
            <option value="2">Best selling</option>
            <option value="3">Alphabetically, A-Z</option>
            <option value="3">Alphabetically, Z-A</option>
            <option value="3">Price, low to high</option>
            <option value="3">Price, high to low</option>
            <option value="3">Date, old to new</option>
            <option value="3">Date, new to old</option>
          </select>

          <div className="shop-asc__seprator mx-3 bg-light d-none d-md-block order-md-0"></div>

          <div className="col-size align-items-center order-1 d-none d-lg-flex">
            <span className="text-uppercase fw-medium me-2">View</span>
            <button
              className="btn-link fw-medium me-2 js-cols-size"
              data-target="products-grid"
              data-cols="2"
            >
              2
            </button>
            <button
              className="btn-link fw-medium me-2 js-cols-size"
              data-target="products-grid"
              data-cols="3"
            >
              3
            </button>
            <button
              className="btn-link fw-medium js-cols-size"
              data-target="products-grid"
              data-cols="4"
            >
              4
            </button>
          </div>

          <div className="shop-filter d-flex align-items-center order-0 order-md-3 d-lg-none">
            <button
              className="btn-link btn-link_f d-flex align-items-center ps-0 js-open-aside"
              data-aside="shopFilter"
            >
              <svg
                className="d-inline-block align-middle me-2"
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_filter" />
              </svg>
              <span className="text-uppercase fw-medium d-inline-block align-middle">
                Filter
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="products-grid row row-cols-2 row-cols-md-3"
        id="products-grid"
      >
        <div className="product-card-wrapper">
          <div className="product-card mb-3 mb-md-4 mb-xxl-5">
            <div className="pc__img-wrapper">
              <div
                className="swiper-container background-img js-swiper-slider"
                data-settings='{"resizeObserver": true}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <Link to="/details/1">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_1.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </Link>
                  </div>
                  <div className="swiper-slide">
                    <Link to="/details/2">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_1-1.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </Link>
                  </div>
                </div>
                <span className="pc__img-prev">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_sm" />
                  </svg>
                </span>
                <span className="pc__img-next">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </span>
              </div>
              <button
                className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                data-aside="cartDrawer"
                title="Add To Cart"
              >
                Add To Cart
              </button>
            </div>

            <div className="pc__info position-relative">
              <p className="pc__category">Dresses</p>
              <h6 className="pc__title">
                <Link to="/details/3">Cropped Faux Leather Jacket</Link>
              </h6>
              <div className="product-card__price d-flex">
                <span className="money price">$29</span>
              </div>
              <div className="product-card__review d-flex align-items-center">
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

              <button
                className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                title="Add To Wishlist"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="product-card-wrapper">
          <div className="product-card mb-3 mb-md-4 mb-xxl-5">
            <div className="pc__img-wrapper">
              <div
                className="swiper-container background-img js-swiper-slider"
                data-settings='{"resizeObserver": true}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_2.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_2-1.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                </div>
                <span className="pc__img-prev">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_sm" />
                  </svg>
                </span>
                <span className="pc__img-next">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </span>
              </div>
              <button
                className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                data-aside="cartDrawer"
                title="Add To Cart"
              >
                Add To Cart
              </button>
            </div>

            <div className="pc__info position-relative">
              <p className="pc__category">Dresses</p>
              <h6 className="pc__title">
                <a href="details.html">Calvin Shorts</a>
              </h6>
              <div className="product-card__price d-flex">
                <span className="money price">$62</span>
              </div>

              <div className="d-flex align-items-center mt-1">
                <button
                  className="swatch-color pc__swatch-color"
                  style={{ color: "#222222" }}
                ></button>
                <button
                  className="swatch-color swatch_active pc__swatch-color"
                  style={{ color: "#b9a16b" }}
                ></button>
                <button
                  className="swatch-color pc__swatch-color"
                  style={{ color: "#f5e6e0" }}
                ></button>
              </div>
              <button
                className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                title="Add To Wishlist"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
              </button>
            </div>

            <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
              <div className="pc-labels__right ms-auto">
                <span className="pc-label pc-label_sale d-block text-white">
                  -67%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card-wrapper">
          <div className="product-card mb-3 mb-md-4 mb-xxl-5">
            <div className="pc__img-wrapper">
              <div
                className="swiper-container background-img js-swiper-slider"
                data-settings='{"resizeObserver": true}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_3.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_3-1.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                </div>
                <span className="pc__img-prev">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_sm" />
                  </svg>
                </span>
                <span className="pc__img-next">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </span>
              </div>
              <button
                className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                data-aside="cartDrawer"
                title="Add To Cart"
              >
                Add To Cart
              </button>
            </div>

            <div className="pc__info position-relative">
              <p className="pc__category">Dresses</p>
              <h6 className="pc__title">
                <a href="details.html">Kirby T-Shirt</a>
              </h6>
              <div className="product-card__price d-flex">
                <span className="money price">$17</span>
              </div>

              <button
                className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                title="Add To Wishlist"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="product-card-wrapper">
          <div className="product-card mb-3 mb-md-4 mb-xxl-5">
            <div className="pc__img-wrapper">
              <div
                className="swiper-container background-img js-swiper-slider"
                data-settings='{"resizeObserver": true}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_4.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_4-1.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                </div>
                <span className="pc__img-prev">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_sm" />
                  </svg>
                </span>
                <span className="pc__img-next">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </span>
              </div>
              <button
                className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                data-aside="cartDrawer"
                title="Add To Cart"
              >
                Add To Cart
              </button>
            </div>

            <div className="pc__info position-relative">
              <p className="pc__category">Dresses</p>
              <h6 className="pc__title">
                <a href="details.html">Cableknit Shawl</a>
              </h6>
              <div className="product-card__price d-flex">
                <span className="money price price-old">$129</span>
                <span className="money price price-sale">$99</span>
              </div>

              <button
                className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                title="Add To Wishlist"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
              </button>
            </div>

            <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
              <div className="pc-labels__left">
                <span className="pc-label pc-label_new d-block bg-white">
                  NEW
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card-wrapper">
          <div className="product-card mb-3 mb-md-4 mb-xxl-5">
            <div className="pc__img-wrapper">
              <div
                className="swiper-container background-img js-swiper-slider"
                data-settings='{"resizeObserver": true}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="/details/">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_5.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_5-1.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                </div>
                <span className="pc__img-prev">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_sm" />
                  </svg>
                </span>
                <span className="pc__img-next">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </span>
              </div>
              <button
                className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                data-aside="cartDrawer"
                title="Add To Cart"
              >
                Add To Cart
              </button>
            </div>

            <div className="pc__info position-relative">
              <p className="pc__category">Dresses</p>
              <h6 className="pc__title">
                <a href="details.html">Colorful Jacket</a>
              </h6>
              <div className="product-card__price d-flex">
                <span className="money price">$29</span>
              </div>

              <button
                className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                title="Add To Wishlist"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="product-card-wrapper">
          <div className="product-card mb-3 mb-md-4 mb-xxl-5">
            <div className="pc__img-wrapper">
              <div
                className="swiper-container background-img js-swiper-slider"
                data-settings='{"resizeObserver": true}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_6.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_6-1.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                </div>
                <span className="pc__img-prev">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_sm" />
                  </svg>
                </span>
                <span className="pc__img-next">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </span>
              </div>
              <button
                className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                data-aside="cartDrawer"
                title="Add To Cart"
              >
                Add To Cart
              </button>
            </div>

            <div className="pc__info position-relative">
              <p className="pc__category">Dresses</p>
              <h6 className="pc__title">
                <a href="details.html">Shirt In Botanical Cheetah Print</a>
              </h6>
              <div className="product-card__price d-flex">
                <span className="money price">$62</span>
              </div>

              <button
                className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                title="Add To Wishlist"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="product-card-wrapper">
          <div className="product-card mb-3 mb-md-4 mb-xxl-5">
            <div className="pc__img-wrapper">
              <div
                className="swiper-container background-img js-swiper-slider"
                data-settings='{"resizeObserver": true}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_7.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_7-1.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                </div>
                <span className="pc__img-prev">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_sm" />
                  </svg>
                </span>
                <span className="pc__img-next">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </span>
              </div>
              <button
                className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                data-aside="cartDrawer"
                title="Add To Cart"
              >
                Add To Cart
              </button>
            </div>

            <div className="pc__info position-relative">
              <p className="pc__category">Dresses</p>
              <h6 className="pc__title">
                <a href="details.html">Cotton Jersey T-Shirt</a>
              </h6>
              <div className="product-card__price d-flex">
                <span className="money price">$17</span>
              </div>

              <button
                className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                title="Add To Wishlist"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="product-card-wrapper">
          <div className="product-card mb-3 mb-md-4 mb-xxl-5">
            <div className="pc__img-wrapper">
              <div
                className="swiper-container background-img js-swiper-slider"
                data-settings='{"resizeObserver": true}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_8.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_8-1.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                </div>
                <span className="pc__img-prev">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_sm" />
                  </svg>
                </span>
                <span className="pc__img-next">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </span>
              </div>
              <button
                className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                data-aside="cartDrawer"
                title="Add To Cart"
              >
                Add To Cart
              </button>
            </div>

            <div className="pc__info position-relative">
              <p className="pc__category">Dresses</p>
              <h6 className="pc__title">
                <a href="details.html">Zessi Dresses</a>
              </h6>
              <div className="product-card__price d-flex">
                <span className="money price price-old">$129</span>
                <span className="money price price-sale">$99</span>
              </div>

              <button
                className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                title="Add To Wishlist"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="product-card-wrapper">
          <div className="product-card mb-3 mb-md-4 mb-xxl-5">
            <div className="pc__img-wrapper">
              <div
                className="swiper-container background-img js-swiper-slider"
                data-settings='{"resizeObserver": true}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_9.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="details.html">
                      <img
                        loading="lazy"
                        src="http://localhost:8000/assets/images/products/product_9-1.jpg"
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </a>
                  </div>
                </div>
                <span className="pc__img-prev">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_sm" />
                  </svg>
                </span>
                <span className="pc__img-next">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </span>
              </div>
              <button
                className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                data-aside="cartDrawer"
                title="Add To Cart"
              >
                Add To Cart
              </button>
            </div>

            <div className="pc__info position-relative">
              <p className="pc__category">Dresses</p>
              <h6 className="pc__title">
                <a href="details.html">Cropped Faux Leather Jacket</a>
              </h6>
              <div className="product-card__price d-flex">
                <span className="money price">$29</span>
              </div>
              <div className="product-card__review d-flex align-items-center">
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

              <button
                className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                title="Add To Wishlist"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="shop-pages d-flex justify-content-between mt-3"
        aria-label="Page navigation"
      >
        <a href="#" className="btn-link d-inline-flex align-items-center">
          <svg
            className="me-1"
            width="7"
            height="11"
            viewBox="0 0 7 11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_prev_sm" />
          </svg>
          <span className="fw-medium">PREV</span>
        </a>
        <ul className="pagination mb-0">
          <li className="page-item">
            <a className="btn-link px-1 mx-2 btn-link_active" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="btn-link px-1 mx-2" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="btn-link px-1 mx-2" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="btn-link px-1 mx-2" href="#">
              4
            </a>
          </li>
        </ul>
        <a href="#" className="btn-link d-inline-flex align-items-center">
          <span className="fw-medium me-1">NEXT</span>
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_next_sm" />
          </svg>
        </a>
      </nav>
    </div>
  );
};

export default Products;
