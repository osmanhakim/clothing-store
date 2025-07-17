import { useEffect } from "react";
import { LogoutAction } from "../store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(LogoutAction());
      navigate("/");
    }, 2000);
  }, [navigate, dispatch]);
  return (
    <div>
      {" "}
      <center>Logging out ...</center>
    </div>
  );
};
export default Logout;
