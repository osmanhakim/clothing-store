import { Link } from "react-router-dom";
const Prod = ({ $id }) => {
  return (
    <div className="product-card-wrapper">
      <div className="product-card mb-3 mb-md-4 mb-xxl-5">
        <div className="pc__img-wrapper">
          <div
            className="swiper-container background-img js-swiper-slider"
            data-settings='{"resizeObserver": true}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Link to="/details/{$id}">
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
                <Link to="/details/{$id}">
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
  );
};

export default Prod;
