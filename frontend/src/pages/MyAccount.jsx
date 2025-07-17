import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const MyAccount = () => {
  const user = useSelector((state) => {
    return state.User;
  });

  return (
    <>
      <Outlet />
      <div className="col-lg-9">
        <div className="page-content my-account__dashboard">
          <p>
            Hello <strong> {user && user.first_name}</strong>
          </p>
          <p>
            From your account dashboard you can view your{" "}
            <Link className="unerline-link" to="/profile/orders">
              recent orders
            </Link>
            , manage your{" "}
            <Link className="unerline-link" to="/profile/address">
              shipping addresses
            </Link>
            , and{" "}
            <Link className="unerline-link" to="/profile/accountDetails">
              edit your password and account details.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
