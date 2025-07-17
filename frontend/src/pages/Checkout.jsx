import { Link } from "react-router-dom";
const Checkout = () => {
  return (
    <main className="pt-90">
      <div className="mb-4 pb-4"></div>
      <section className="shop-checkout container">
        <h2 className="page-title">Shipping and Checkout</h2>
        <div className="checkout-steps">
          <Link to="/cart" className="checkout-steps__item active">
            <span className="checkout-steps__item-number">01</span>
            <span className="checkout-steps__item-title">
              <span>Shopping Bag</span>
              <em>Manage Your Items List</em>
            </span>
          </Link>
          <Link to="/checkout" className="checkout-steps__item active">
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
        <form
          name="checkout-form"
          action="https://uomo-html.flexkitux.com/Demo3/shop_order_complete.html"
        >
          <div className="checkout-form">
            <div className="billing-info__wrapper">
              <div className="row">
                <div className="col-6">
                  <h4>SHIPPING DETAILS</h4>
                </div>
                <div className="col-6"></div>
              </div>

              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      required=""
                    />
                    <label for="name">Full Name *</label>
                    <span className="text-danger"></span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      required=""
                    />
                    <label for="phone">Phone Number *</label>
                    <span className="text-danger"></span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      name="zip"
                      required=""
                    />
                    <label for="zip">zip code *</label>
                    <span className="text-danger"></span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      required=""
                    />
                    <label for="city">Town / City *</label>
                    <span className="text-danger"></span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mt-3 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      required=""
                    />
                    <label for="state">State *</label>
                    <span className="text-danger"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      required=""
                    />
                    <label for="address">street address</label>
                    <span className="text-danger"></span>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      required=""
                    />
                    <label for="city">country *</label>
                    <span className="text-danger"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout__totals-wrapper">
              <div className="sticky-content">
                <div className="checkout__totals">
                  <h3>Your Order</h3>
                  <table className="checkout-cart-items">
                    <thead>
                      <tr>
                        <th>PRODUCT</th>
                        <th align="right">SUBTOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Zessi Dresses x 2</td>
                        <td align="right">$32.50</td>
                      </tr>
                      <tr>
                        <td>Kirby T-Shirt</td>
                        <td align="right">$29.90</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="checkout-totals">
                    <tbody>
                      <tr>
                        <th>SUBTOTAL</th>
                        <td align="right">$62.40</td>
                      </tr>
                      <tr>
                        <th>SHIPPING</th>
                        <td align="right">Free shipping</td>
                      </tr>
                      <tr>
                        <th>VAT</th>
                        <td align="right">$19</td>
                      </tr>
                      <tr>
                        <th>TOTAL</th>
                        <td align="right">$81.40</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="checkout__payment-methods">
                  <div className="form-check">
                    <input
                      className="form-check-input form-check-input_fill"
                      type="radio"
                      name="checkout_payment_method"
                      id="checkout_payment_method_1"
                      checked
                    />
                    <label
                      className="form-check-label"
                      for="checkout_payment_method_1"
                    >
                      Direct bank transfer
                      <p className="option-detail">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference.Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input form-check-input_fill"
                      type="radio"
                      name="checkout_payment_method"
                      id="checkout_payment_method_2"
                    />
                    <label
                      className="form-check-label"
                      for="checkout_payment_method_2"
                    >
                      Check payments
                      <p className="option-detail">
                        Phasellus sed volutpat orci. Fusce eget lore mauris
                        vehicula elementum gravida nec dui. Aenean aliquam
                        varius ipsum, non ultricies tellus sodales eu. Donec
                        dignissim viverra nunc, ut aliquet magna posuere eget.
                      </p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input form-check-input_fill"
                      type="radio"
                      name="checkout_payment_method"
                      id="checkout_payment_method_3"
                    />
                    <label
                      className="form-check-label"
                      for="checkout_payment_method_3"
                    >
                      Cash on delivery
                      <p className="option-detail">
                        Phasellus sed volutpat orci. Fusce eget lore mauris
                        vehicula elementum gravida nec dui. Aenean aliquam
                        varius ipsum, non ultricies tellus sodales eu. Donec
                        dignissim viverra nunc, ut aliquet magna posuere eget.
                      </p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input form-check-input_fill"
                      type="radio"
                      name="checkout_payment_method"
                      id="checkout_payment_method_4"
                    />
                    <label
                      className="form-check-label"
                      for="checkout_payment_method_4"
                    >
                      Paypal
                      <p className="option-detail">
                        Phasellus sed volutpat orci. Fusce eget lore mauris
                        vehicula elementum gravida nec dui. Aenean aliquam
                        varius ipsum, non ultricies tellus sodales eu. Donec
                        dignissim viverra nunc, ut aliquet magna posuere eget.
                      </p>
                    </label>
                  </div>
                  <div className="policy-text">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our{" "}
                    <a href="terms.html" target="_blank">
                      privacy policy
                    </a>
                    .
                  </div>
                </div>
                <button className="btn btn-primary btn-checkout">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Checkout;
