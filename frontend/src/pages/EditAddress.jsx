import { Link, ServerRouter, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Address from "./Address";

const EditAddress = () => {
  const { id } = useParams();
  const name = useRef("");
  const number = useRef("");
  const zip = useRef("");
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

  const [error, setError] = useState("");
  useEffect(() => {
    const fetchfunc = async () => {
      const response = await fetch("http://localhost:8000/api/address/" + id, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "Application/Json",
          "Accept-Language": lang,
        },
      });
      const data = await response.json();
      console.log(data);
      //(data.data);
      name.current.value = data.data.full_name;
      number.current.value = data.data.phone_number;
      city.current.value = data.data.city;
      state.current.value = data.data.state;
      zip.current.value = data.data.zip;
      country.current.value = data.data.country;
      street.current.value = data.data.street_address;
    };
    fetchfunc();
  }, []);

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
              <form
                onSubmit={async (event) => {
                  event.preventDefault();
                  const ob = {
                    full_name: name.current.value,
                    phone_number: number.current.value,
                    street_address: street.current.value,
                    city: city.current.value,
                    state: state.current.value,
                    zip: zip.current.value,
                    country: country.current.value,
                  };
                  console.log(ob);

                  const response = await fetch(
                    "http://localhost:8000/api/address/" + id,
                    {
                      method: "PATCH",
                      headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                        "Accept-Language": lang,
                      },
                      body: JSON.stringify(ob),
                    }
                  );
                  const newData = await response.json();
                  if (!response.ok) setError(newData.data);
                  if (response.ok) navigate("/profile");
                  console.log(newData);
                }}
              >
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
                        required=""
                      />
                      <span className=""></span>
                    </div>
                  </div>
                </div>
              </form>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <hr />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditAddress;
