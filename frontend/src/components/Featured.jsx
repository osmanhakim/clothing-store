import { useEffect, useState } from "react";
import "./Featured.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Featured = () => {
  const [featured, setFeatured] = useState([]);
  const [iteration, setIteration] = useState(1);
  const [color, setColor] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  const lang = useSelector((state) => {
    return state.Auth.lang;
  });
  const increment = () => {
    setIteration((prev) => {
      return ++prev;
    });
  };

  function changeColor(index, i) {
    setColor((prev) => {
      let arr = [...prev];
      arr[index] = i;
      return arr;
    });
  }
  useEffect(() => {
    const fetchFeatured = async () => {
      const response = await fetch(
        `http://localhost:8000/api/featured/${iteration}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
            "Accept-Language": lang,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setFeatured(data.data);
      let arr = [];
      for (let i = 0; i < data.data.length; i++) {
        arr[i] = 0;
      }
      setColor([...arr]);

      setLoadMore(data.loadMore);
      console.log("color", color);
      //    increment();
    };
    fetchFeatured();
  }, [iteration, lang]);
  return (
    <section className="products-grid container">
      <h2 className="section-title text-center mb-3 pb-xl-3 mb-xl-4">
        Featured Products
      </h2>
      <div className="row">
        {featured &&
          featured.map((item, index) => {
            console.log(item);
            console.log(color[index]);
            return (
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="product-card product-card_style3 mb-3 mb-md-4 mb-xxl-5">
                  <div className="pc__img-wrapper">
                    <Link
                      to={`/details/${
                        item?.image[color[index]][0]?.filable_id
                      }`}
                    >
                      <img
                        loading="lazy"
                        src={item?.image[color[index]][0]?.path}
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </Link>
                  </div>

                  <div className="pc__info position-relative">
                    <h6 className="pc__title">
                      <a href="/details/1">{item.product.name}</a>
                    </h6>
                    <div className="product-card__price d-flex align-items-center">
                      <span className="money price text-secondary">
                        {item.product.price}$
                      </span>
                    </div>
                    <div className="colors">
                      {item &&
                        item.colors.map((c, i) => {
                          return (
                            <span
                              onClick={() => {
                                changeColor(index, i);
                              }}
                              style={{ backgroundColor: c.code }}
                            ></span>
                          );
                        })}
                    </div>

                    {/* <div className="anim_appear-bottom position-absolute bottom-0 start-0 d-none d-sm-flex align-items-center bg-body">
                      <button
                        className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-add-cart js-open-aside"
                        data-aside="cartDrawer"
                        title="Add To Cart"
                      >
                        Add To Cart
                      </button>
                      <button
                        className="btn-link btn-link_lg me-4 text-uppercase fw-medium js-quick-view"
                        data-bs-toggle="modal"
                        data-bs-target="#quickView"
                        title="Quick view"
                      >
                        <span className="d-none d-xxl-block">Quick View</span>
                        <span className="d-block d-xxl-none">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_view" />
                          </svg>
                        </span>
                      </button>
                      <button
                        className="pc__btn-wl bg-transparent border-0 js-add-wishlist"
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
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {loadMore && (
        <div className="text-center mt-2">
          <button
            onClick={() => {
              increment();
            }}
            className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
            href="#"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Featured;
