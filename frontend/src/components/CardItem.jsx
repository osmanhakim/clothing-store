import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../store/card";
import { CardActions } from "../store/card";
const CardItem = (params) => {
  const lang = useSelector((state) => {
    return state.Auth.lang;
  });

  const dispatch = useDispatch();
  const [photo, setPhoto] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [total, setTotal] = useState("");
  useEffect(() => {
    const fetchCardItem = async () => {
      const response = await fetch(
        "http://localhost:8000/api/cardItemDetials/" + params.id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
          },
        }
      );
      const data = await response.json();

      console.log(data);
      setPhoto(data.photo.path);
      setColor(data.color);
      setPrice(data.price);
      setName(data.productName);
      setSize(data.size);
    };
    fetchCardItem();
  }, [lang]);

  const quantity = useSelector((state) => {
    let index = state.Card.card.findIndex((item) => {
      if (item.id == params.id) return true;
      return false;
    });
    return state.Card.card[index].quantity;
  }, []);
  useEffect(() => {
    setTotal(quantity * price);
  }, [quantity, price]);
  return (
    <tr>
      <td>
        <div className="shopping-cart__product-item">
          <img loading="lazy" src={photo} width="120" height="120" alt="" />
        </div>
      </td>
      <td>
        <div className="shopping-cart__product-item__detail">
          <h4>{name}</h4>
          <ul className="shopping-cart__product-item__options">
            <li>Color: {color} </li>
            <li>Size: {size}</li>
          </ul>
        </div>
      </td>
      <td>
        <span className="shopping-cart__product-price">${price}</span>
      </td>
      <td>
        <div className="qty-control position-relative">
          <input
            type="number"
            name="quantity"
            value={quantity}
            min="1"
            className="qty-control__number text-center"
          />
          <div
            className="qty-control__reduce"
            onClick={() => {
              dispatch(CardActions.decreaseProduct({ id: params.id }));
            }}
          >
            -
          </div>
          <div
            className="qty-control__increase"
            onClick={() => {
              dispatch(addProduct({ id: params.id, quantity: 1 }));
            }}
          >
            +
          </div>
        </div>
      </td>
      <td>
        <span className="shopping-cart__subtotal">${total}</span>
      </td>
      <td>
        <a
          href="#"
          className="remove-cart"
          onClick={() => {
            dispatch(CardActions.delProduct({ id: params.id }));
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="#767676"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.259435 8.85506L9.11449 0L10 0.885506L1.14494 9.74056L0.259435 8.85506Z" />
            <path d="M0.885506 0.0889838L9.74057 8.94404L8.85506 9.82955L0 0.97449L0.885506 0.0889838Z" />
          </svg>
        </a>
      </td>
    </tr>
  );
};

export default CardItem;
