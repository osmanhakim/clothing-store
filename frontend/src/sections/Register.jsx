import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthActions } from "../store/auth";
import { UserActions } from "../store/user";
const Register = () => {
  const first_name = useRef();
  const last_name = useRef();
  const email = useRef();
  const password = useRef();

  const dispatch = useDispatch();
  const lang = useSelector((state) => {
    return state.Auth.lang;
  });

  const password_confirmation = useRef();
  const mobile = useRef();
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [errors, setErrors] = useState({
    first_name: [],
    last_name: [],
    email: [],
    mobile: [],
    password: [],
  });
  // function getCookie(name) {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return decodeURI(parts.pop().split(";").shift());
  // }

  const handleRegister = async (e) => {
    setPressed(true);
    e.preventDefault();

    await fetch("http://localhost:8000/sanctum/csrf-cookie", {
      credentials: "include",
    });

    const response = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
        // "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
      },
      body: JSON.stringify({
        first_name: first_name.current?.value || "",
        last_name: last_name.current?.value || "",
        email: email.current?.value || "",
        password: password.current?.value || "",
        password_confirmation: password_confirmation.current?.value || "",
        mobile: mobile.current?.value || "",
      }),
    });

    const data = await response.json();
    setSent(true);
    if (response.ok) {
      dispatch(
        AuthActions.setToken({
          accessToken: data.session.access_token,
          expAccessToken: data.session.accessTokenEXP,
          refreshToken: data.session.refresh_token,
          expRefreshToken: data.session.refreshTokenEXP,
        })
      );
      console.log(data);
      dispatch(UserActions.setUser(data.user));
      navigate("/profile");
    }
    if (data.status === false) {
      setErrors(data.errors);
    }
    console.log(errors);
    setPressed(false);
  };

  return (
    <main className="pt-90">
      <section className="login-register container">
        <form
          method="POST"
          name="register-form"
          className="needs-validation"
          noValidate
          onSubmit={handleRegister}
        >
          <div className="form-floating mb-3">
            <input
              className="form-control form-control_gray"
              name="first_name"
              ref={first_name}
              autoComplete="name"
              onChange={() => {
                setErrors((prev) => {
                  const update = { ...prev };
                  update.first_name[0] = "";
                  return update;
                });
              }}
              required
            />

            <label htmlFor="name">first Name</label>
            <p style={{ color: "red" }}>
              {sent && errors.first_name && errors.first_name[0]}{" "}
            </p>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control form-control_gray"
              name="last_name"
              ref={last_name}
              autoComplete="name"
              onChange={() => {
                setErrors((prev) => {
                  const update = { ...prev };
                  update.last_name[0] = "";
                  return update;
                });
              }}
              required
            />
            <label htmlFor="name">last name</label>
            <p style={{ color: "red" }}>
              {" "}
              {sent && errors.last_name && errors.last_name[0]}
            </p>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control form-control_gray"
              name="email"
              ref={email}
              autoComplete="email"
              onChange={() => {
                setErrors((prev) => {
                  const update = { ...prev };
                  update.email[0] = "";
                  return update;
                });
              }}
              required
            />
            <label htmlFor="email">Email address *</label>
            <p style={{ color: "red" }}>
              {" "}
              {sent && errors.email && errors.email[0]}{" "}
            </p>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control form-control_gray"
              name="mobile"
              ref={mobile}
              autoComplete="mobile"
              onChange={() => {
                setErrors((prev) => {
                  const update = { ...prev };
                  update.mobile[0] = "";
                  return update;
                });
              }}
              required
            />
            <label htmlFor="mobile">Mobile *</label>
            <p style={{ color: "red" }}>
              {sent && errors.mobile && errors.email[0]}{" "}
            </p>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control form-control_gray"
              name="password"
              ref={password}
              autoComplete="new-password"
              required
            />
            <label htmlFor="password">Password *</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control form-control_gray"
              name="password_confirmation"
              ref={password_confirmation}
              autoComplete="new-password"
              required
            />
            <label htmlFor="password_confirmation">Confirm Password *</label>
            <p style={{ color: "red" }}>
              {" "}
              {sent && errors.password && errors.password[0]}{" "}
            </p>
          </div>
          {pressed && (
            <button
              type="submit"
              className="btn btn-primary w-100 text-uppercase"
              disabled
            >
              Register
            </button>
          )}
          {!pressed && (
            <button
              type="submit"
              className="btn btn-primary w-100 text-uppercase"
            >
              Register
            </button>
          )}
          <div className="customer-option mt-4 text-center">
            <span className="text-secondary">Have an account?</span>
            <Link to="/login" className="btn-text js-show-register">
              Login to your Account
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Register;
