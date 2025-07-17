import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardItem from "../components/CardItem";
import { useEffect, useState } from "react";
const Cart = () => {
  const [total, setTotal] = useState(0);
  const card = useSelector((state) => {
    return state.Card.card;
  });
  const lang = useSelector((state) => {
    return state.Auth.lang;
  });

  useEffect(() => {
    console.log(card);
    let t = 0;
    const calcTotal = async () => {
      for (let i = 0; i < card.length; i++) {
        const response = await fetch(
          "http://localhost:8000/api/cardItemDetials/" + card[i].id,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Accept-Language": lang,
            },
          }
        );
        const data = await response.json();
        t += data.price * card[i].quantity;
      }
      setTotal(t);
    };
    calcTotal();
  }, [card, lang]);
  return (
    <main className="pt-90">
      <div className="mb-4 pb-4"></div>
      <section className="shop-checkout container">
        <h2 className="page-title">Cart</h2>
        <div className="checkout-steps">
          <Link to="" className="checkout-steps__item active">
            <span className="checkout-steps__item-number">01</span>
            <span className="checkout-steps__item-title">
              <span>Shopping Bag</span>
              <em>Manage Your Items List</em>
            </span>
          </Link>
          <Link to="/checkout" className="checkout-steps__item">
            <span className="checkout-steps__item-number">02</span>
            <span className="checkout-steps__item-title">
              <span>Shipping and Checkout</span>
              <em>Checkout Your Items List</em>
            </span>
          </Link>
          <Link to="/confirmation" className="checkout-steps__item">
            <span className="checkout-steps__item-number">03</span>
            <span className="checkout-steps__item-title">
              <span>Confirmation</span>
              <em>Review And Submit Your Order</em>
            </span>
          </Link>
        </div>
        <div className="shopping-cart">
          <div className="cart-table__wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th></th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {card.map((item) => {
                  return (
                    <CardItem
                      id={item.id}
                      quantity={item.quantity}
                      key={item.id}
                    />
                  );
                })}
              </tbody>
            </table>
            <div className="cart-table-footer">
              <form action="#" className="position-relative bg-body">
                <input
                  className="form-control"
                  type="text"
                  name="coupon_code"
                  placeholder="Coupon Code"
                />
                <input
                  className="btn-link fw-medium position-absolute top-0 end-0 h-100 px-4"
                  type="submit"
                  defaultValue="APPLY COUPON"
                />
              </form>
              <button className="btn btn-light">UPDATE CART</button>
            </div>
          </div>
        </div>
        {card.length > 0 && (
          <div className="shopping-cart__totals-wrapper">
            <div className="sticky-content">
              <div className="shopping-cart__totals">
                <h3>Cart Totals</h3>
                <table className="cart-totals">
                  <tbody>
                    {/* <tr>
                    <th>Subtotal</th>
                    <td>$1300</td>
                  </tr> */}
                    {/* <tr>
                    <th>Shipping</th>
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input form-check-input_fill"
                          type="radio"
                          name="shipment"
                          defaultValue=""
                          id="free_shipping"
                        />
                        <label className="form-check-label" for="free_shipping">
                          Free shipping
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input form-check-input_fill"
                          type="radio"
                          name="shipment"
                          defaultValue=""
                          id="flat_rate"
                        />
                        <label className="form-check-label" for="flat_rate">
                          Flat rate: $49
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input form-check-input_fill"
                          type="radio"
                          name="shipment"
                          defaultValue=""
                          id="local_pickup"
                        />
                        <label className="form-check-label" for="local_pickup">
                          Local pickup: $8
                        </label>
                      </div>
                      <div>Shipping to AL.</div>
                      <div>
                        <a href="#" className="menu-link menu-link_us-s">
                          CHANGE ADDRESS
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>VAT</th>
                    <td>$19</td>
                  </tr> */}
                    <tr>
                      <th>Total</th>
                      <td>${total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mobile_fixed-btn_wrapper">
                <div className="button-wrapper container">
                  <Link to="/checkout" className="btn btn-primary btn-checkout">
                    PROCEED TO CHECKOUT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Cart;
