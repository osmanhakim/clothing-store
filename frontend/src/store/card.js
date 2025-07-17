import { createSlice } from "@reduxjs/toolkit";
export const CardSlice = createSlice({
  name: "Card",
  initialState: {
    card: [],
    price: 0,
    number: 0,
  },
  reducers: {
    addProduct(state, action) {
      if (action.payload.id < 1 || !action.payload.id) return;
      if (action.payload.quantity < 1 || !action.payload.quantity) return;
      console.log(action);
      let i = state.card.findIndex((item) => {
        if (item.id === action.payload.id) return true;
        return false;
      });
      if (i == -1) {
        state.card.push(action.payload);
        state.number += action.payload.quantity;
      } else {
        state.card[i].quantity += action.payload.quantity;
        state.number += action.payload.quantity;
      }

      //first check if product available in card

      // if available increase by one
      //if not add it to card with quantty given
    },
    delProduct(state, action) {
      // del product from
      console.log("delProduct", action);
      state.card = state.card.filter((item, index) => {
        if (action.payload.id === item.id) {
          state.number -= state.card[index].quantity;
          return false;
        }

        return true;
      });
    },
    increaseProduct(state, action) {
      let index = state.card.findIndex((item) => {
        return item.id == action.payload.id;
      });
      console.log(action.payload.id);
      if (index > -1) {
        state.card[action.payload.id].quantity++;
        state.number++;
      } else {
      }
    },
    decreaseProduct(state, action) {
      let index = state.card.findIndex((item) => {
        return item.id == action.payload.id;
      });
      console.log(action.payload.id);
      if (index > -1 && state.card[index].quantity > 0) {
        state.card[index].quantity--;
        state.number--;
        if (state.card[index].quantity == 0) del(state, action);
      } else {
        console.log("not found ");
      }
    },
  },
});

const del = (state, action) => {
  const id = action.payload.id;
  state.card = state.card.filter((item) => {
    if (item.id != id) return true;
  });
};
export const addProduct = (action) => {
  return async (dispatch, getState) => {
    console.log("action", action);

    const id = action.id;
    const quantity = action.quantity;
    const indexOfelement = getState().Card.card.findIndex((item) => {
      if (item.id == id) return true;
      return false;
    });
    if (indexOfelement == -1)
      dispatch(CardActions.addProduct({ id, quantity }));
    else {
      const response = await fetch("http://localhost:8000/api/product/" + id);
      const data = await response.json();
      console.log("data", data);
      console.log("index of element", indexOfelement);
      ///////////////////////////////////////////////
      console.log(
        "Current cart quantity:",
        getState().Card.card[indexOfelement].quantity
      );
      console.log("Requested add quantity:", quantity);

      console.log("Backend available quantity:", data.data.quantity);
      if (
        getState().Card.card[indexOfelement].quantity + quantity <=
        data.data.quantity
      ) {
        console.log(
          "Total after add:",
          getState().Card.card[indexOfelement].quantity
        );
        console.log("data.quantity ... > quantity ");
        dispatch(CardActions.addProduct({ id, quantity }));
      }
    }
  };
};
export const CardActions = CardSlice.actions;
export default CardSlice.reducer;
