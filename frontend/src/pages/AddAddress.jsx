import { Link, ServerRouter, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useSelector } from "react-redux";

const AddAddress = () => {
  const name = useRef();
  const number = useRef();
  const zip = useRef();
  const city = useRef();
  const state = useRef();
  const street = useRef();
  const country = useRef();
  const navigate = useNavigate();
  const token = useSelector((state) => {
    return state.Auth.AccessToken;
  });

  const lang = useSelector((state) => {
    return state.Auth.lang;
  });
  return (
    <main className="pt-90">
      <div className="mb-4 pb-4"></div>
      <section className="my-account container">
        <h2 className="page-title">Address</h2>
        <div className="row">
          <div className="col-lg-9">
            <div className="page-content my-account__address">
              <div className="row">
                <div className="col-6">
                  <p className="notice">
                    The following addresses will be used on the checkout page by
                    default.
                  </p>
                </div>
                <div className="col-6 text-right">
                  <Link to="/profile/address" className="btn btn-sm btn-danger">
                    Back
                  </Link>
                </div>
              </div>
              <form>
                <div className="row mt-5">
                  <div className="col-md-6">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        required=""
                        ref={name}
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
                        ref={number}
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
                        ref={zip}
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
                        ref={city}
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
                        ref={state}
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
                        ref={street}
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
                        ref={country}
                        name="country"
                        required=""
                      />
                      <label for="city">country *</label>
                      <span className="text-danger"></span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="submit"
                        className="btn btn-danger form-control"
                        name="submit"
                        onClick={async (event) => {
                          event.preventDefault();
                          const obj = {
                            full_name: name.current.value,
                            city: city.current.value,
                            state: state.current.value,
                            zip: zip.current.value,
                            country: country.current.value,
                            street_address: street.current.value,
                            phone_number: number.current.value,
                          };
                          console.log(obj);
                          const data = JSON.stringify(obj);
                          const response = await fetch(
                            "http://localhost:8000/api/address",
                            {
                              method: "POST",
                              body: data,
                              headers: {
                                Authorization: "Bearer " + token,
                                "Content-Type": "application/json",
                                "Accept-Language": lang,
                              },
                            }
                          );
                          const res = await response.json();
                          console.log(res);
                          navigate("/profile");
                        }}
                        required=""
                      />
                      <span className=""></span>
                    </div>
                  </div>
                </div>
              </form>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddAddress;
