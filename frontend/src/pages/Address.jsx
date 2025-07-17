import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Address = () => {
  const [list, setList] = useState([]);

  const token = useSelector((state) => {
    return state.Auth.AccessToken;
  });

  const lang = useSelector((state) => {
    return state.Auth.lang;
  });

  useEffect(() => {
    const fetchfunc = async () => {
      const response = await fetch("http://localhost:8000/api/address", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "Application/Json",
          "Accept-Language": lang,
        },
      });
      const data = await response.json();
      console.log(data);
      setList(data.data);
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
                  <Link
                    to="/profile/addAddress"
                    className="btn btn-sm btn-info"
                  >
                    Add New
                  </Link>
                </div>
              </div>
              <div className="my-account__address-list row">
                <h5>Shipping Address</h5>

                <div className="my-account__address-item col-md-6">
                  <div className="my-account__address-item__title"></div>
                  <div className="my-account__address-item__detail">
                    {list &&
                      list.map((item) => {
                        return (
                          <div>
                            <div>
                              <p>Name: {item.full_name}</p>
                              <p>street address: {item.street_address}</p>
                              <p>city: {item.city}</p>
                              <p>state: {item.state}</p>
                              <p>phone number: {item.phone_number}</p>
                              <p>country: {item.country}</p>
                            </div>
                            <Link to={`/profile/editAddress/${item.id}`}>
                              edit
                            </Link>
                            <button
                              onClick={() => {
                                const delAddress = async () => {
                                  const response = await fetch(
                                    "http://localhost:8000/api/address/" +
                                      item.id,
                                    {
                                      method: "DELETE",
                                      headers: {
                                        Authorization: "Bearer " + token,
                                        "Content-Type": "Application/Json",
                                        "Accept-Language": lang,
                                      },
                                    }
                                  );
                                  if (response.ok) {
                                    setList((prev) => {
                                      return prev.filter((elem) => {
                                        return elem.id !== item.id;
                                      });
                                    });
                                  }
                                  const data = await response.json();
                                  console.log(data);
                                };
                                delAddress();
                              }}
                              style={{ marginLeft: "5px", border: "none" }}
                            >
                              delete
                            </button>
                            <hr />
                          </div>
                        );
                      })}
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Address;
