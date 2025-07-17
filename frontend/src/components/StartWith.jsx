import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StartWith = () => {
  const lang = useSelector((state) => state.Auth.lang);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //setCategories([1]); // temporary demo data so map runs
    const getStart = async () => {
      const response = await fetch("http://localhost:8000/api/loadStart", {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          "Accept-Language": lang,
        },
      });
      const data = await response.json();
      console.log(data.data);
      setCategories(data.data);
    };
    getStart();
  }, [lang]);

  return (
    <>
      <section className="category-banner container mt-5">
        <div className="row">
          {categories &&
            categories.map((item, index) => {
              return (
                <>
                  <div className="col-md-6">
                    <div className="category-banner__item border-radius-10 mb-5">
                      <img
                        loading="lazy"
                        className="h-auto"
                        src={item.image[0].path}
                        width="690"
                        height="665"
                        alt=""
                      />
                      <div className="category-banner__item-mark">
                        Starting at ${item.price}
                      </div>
                      <div className="category-banner__item-content">
                        <h3 className="mb-0">{item.name}</h3>
                        <button className="btn-link default-underline text-uppercase fw-medium">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default StartWith;
