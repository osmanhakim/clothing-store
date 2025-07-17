import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AccountDetails = () => {
  const name = useRef("");
  const number = useRef("");
  const email = useRef("");
  const [error, setError] = useState();
  const token = useSelector((state) => {
    return state.Auth.AccessToken;
  }, []);

  const lang = useSelector((state) => {
    return state.Auth.lang;
  }, []);
  const new_password = useRef();
  const new_password_confirmation = useRef();
  const old_password = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (state) => {
      const response = await fetch("http://localhost:8000/api/accountdetails", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "Application/json",
          "Accept-Language": lang,
        },
      });

      const data = await response.json();
      console.log(data);

      name.current.value = data.name;
      email.current.value = data.email;
      number.current.value = data.number;
    };
    console.log("token", token);
    fetchData();
  }, [token, lang]);
  return (
    <main class="pt-90">
      <div class="mb-4 pb-4"></div>
      <section class="my-account container">
        <h2 class="page-title">Account Details</h2>
        <div class="row">
          <div class="col-lg-9">
            <div class="page-content my-account__edit">
              <div class="my-account__edit-form">
                <form
                  name="account_edit_form"
                  action="#"
                  method="POST"
                  className="needs-validation"
                  novalidate=""
                  onChange={() => {
                    setError("");
                  }}
                  onSubmit={async (event) => {
                    event.preventDefault();
                    const ob = {
                      name: name.current.value,
                      email: email.current.value,
                      mobile: number.current.value,
                      old_password: old_password.current.value,
                      new_password: new_password.current.value,
                      new_password_confirmation:
                        new_password_confirmation.current.value,
                    };
                    console.log(ob);

                    const response = await fetch(
                      "http://localhost:8000/api/accountdetails",
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
                    if (!response.ok) setError(newData);
                    if (response.ok) navigate("/profile");
                    console.log(newData);
                  }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-floating my-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          name="name"
                          ref={name}
                          required=""
                        />
                        <label for="name">Name</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div classNameclass="form-floating my-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mobile Number"
                          name="mobile"
                          ref={number}
                          required=""
                        />
                        <label for="mobile">Mobile Number</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating my-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          name="email"
                          ref={email}
                          required=""
                        />
                        <label for="account_email">Email Address</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="my-3">
                        <h5 className="text-uppercase mb-0">Password Change</h5>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating my-3">
                        <input
                          type="password"
                          class="form-control"
                          id="old_password"
                          ref={old_password}
                          name="old_passwordold_password"
                          placeholder="Old password"
                          required=""
                        />
                        <label for="old_password">Old password</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating my-3">
                        <input
                          type="password"
                          class="form-control"
                          id="new_password"
                          name="new_password"
                          ref={new_password}
                          placeholder="New password"
                          required=""
                        />
                        <label for="account_new_password">New password</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating my-3">
                        <input
                          type="password"
                          className="form-control"
                          cfpwd=""
                          ref={new_password_confirmation}
                          data-cf-pwd="#new_password"
                          id="new_password_confirmation"
                          name="new_password_confirmation"
                          placeholder="Confirm new password"
                          required=""
                        />
                        <label for="new_password_confirmation">
                          Confirm new password
                        </label>
                        <div class="invalid-feedback">
                          Passwords did not match!
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="my-3">
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {error && <p style={{ color: "red" }}> {error.data}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccountDetails;
