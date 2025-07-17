import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const token = useSelector((state) => {
    return state.Auth.AccessToken;
  });
  const lang = useSelector((state) => {
    return state.Auth.lang;
  });
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch("http://localhost:8000/api/session", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "Application/Json",
          "Accept-Language": lang,
        },
      });
      if (!response.ok) {
        const data = await response.json();
        console.log("session", data);
        navigate("/logout");
      } else {
        const data = await response.json();
        console.log("from session", data);
      }
    };
    if (!token) {
      console.log(token);
      navigate("/logout");
    } else {
      fetchSession();
    }
  }, []);
  return (
    <main class="pt-90">
      <div class="mb-4 pb-4"></div>
      <section class="my-account container">
        <h2 class="page-title">My Account</h2>
        <div class="row">
          <div class="col-lg-3">
            <ul class="account-nav">
              <li>
                <Link to="/profile" class="menu-link menu-link_us-s">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/profile/orders" class="menu-link menu-link_us-s">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/profile/address" class="menu-link menu-link_us-s">
                  Addresses
                </Link>
              </li>
              <li>
                <Link
                  to="/profile/accountDetails"
                  class="menu-link menu-link_us-s"
                >
                  Account Details
                </Link>
              </li>
              <li>
                <Link to="/logout" class="menu-link menu-link_us-s">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-lg-9">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
