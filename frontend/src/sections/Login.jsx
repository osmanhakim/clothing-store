import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../store/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [submit, setSubmit] = useState(false);
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => {
    return state.Auth;
  });
  useEffect(() => {
    if (auth?.AccessToken) navigate("/profile");
  }, [auth]);

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2)
      return decodeURIComponent(parts.pop().split(";").shift());
  }
  // const loginError = useSelector((state) => {
  //   return state.Auth.loginError;
  // });

  return (
    <main className="pt-90">
      <div className="mb-4 pb-4"></div>
      <section className="login-register container">
        <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore active"
              id="login-tab"
              data-bs-toggle="tab"
              href="#tab-item-login"
              role="tab"
              aria-controls="tab-item-login"
              aria-selected="true"
            >
              Login
            </a>
          </li>
        </ul>

        <div className="tab-content pt-2" id="login_register_tab_content">
          <div
            className="tab-pane fade show active"
            id="tab-item-login"
            role="tabpanel"
            aria-labelledby="login-tab"
          >
            <div className="login-form">
              <form
                method="POST"
                name="login-form"
                className="needs-validation"
                noValidate
                onChange={() => {
                  setSubmit(false);
                }}
                onSubmit={async (e) => {
                  e.preventDefault();
                  dispatch(
                    LoginAction(email.current.value, password.current.value)
                  );
                  if (auth.AccessToken) navigate("/profile");
                  else {
                    setTimeout(() => {
                      setSubmit(true);
                    }, 1500);
                  }
                }}
              >
                <div className="form-floating mb-3">
                  <input
                    ref={email}
                    className="form-control form-control_gray"
                    name="email"
                    id="email"
                    defaultValue=""
                    required
                    autoComplete="email"
                    autoFocus
                  />
                  <label htmlFor="email">Email address *</label>
                </div>

                <div className="pb-3"></div>

                <div className="form-floating mb-3">
                  <input
                    id="password"
                    type="password"
                    ref={password}
                    className="form-control form-control_gray"
                    name="password"
                    required
                    autoComplete="current-password"
                  />
                  <label htmlFor="password">Password *</label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 text-uppercase"
                >
                  Log In
                </button>
                {submit && (
                  <p
                    style={{
                      color: "red",
                      margin: "5px 0",
                      textAlign: "center",
                    }}
                  >
                    The provided credentials are incorrect.
                  </p>
                )}
                <div className="customer-option mt-4 text-center">
                  <span className="text-secondary">No account yet?</span>
                  <Link
                    to="/register"
                    className="p-1 btn-text js-show-register"
                  >
                    Create Account
                  </Link>
                  <Link to="/profile" className="p-1 btn-text js-show-register">
                    My Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
