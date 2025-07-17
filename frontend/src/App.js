import { useTranslation } from "react-i18next";
import "./App.css";
import "./i18n.js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "./store/auth";
function App() {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  useEffect(() => {
    dispatch(AuthActions.setI18n(i18n));
  }, [i18n]);
  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <Outlet />
      {/* <Carousel /> */}
      {/* <div className="mb-5"></div> */}
      <Footer />
    </>
  );
}

export default App;
