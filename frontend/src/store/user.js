import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    id: null,
    first_name: "",
    last_name: "",
    email: "",
  },
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
    },
    delUser(state) {
      state.id = null;
      state.first_name = "";
      state.last_name = "";
      state.email = "";
    },
  },
});

// export const GetInfo = () => {
//   return async (dispatch, getState) => {
//     try {
//       const cs = await fetch("http://localhost:8000/sanctum/csrf-cookie", {
//         credentials: "include",
//       });

//       console.log(getState().Auth.AccessToken);
//       const response = await fetch("http://localhost:8000/api/userInfo", {
//         // mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${getState().Auth.AccessToken}`,
//         },
//         // credentials: "include",
//       });
//       console.log(response);
//       const data = await response.json();
//       console.log(data);
//     } catch (ex) {
//       console.log(ex);
//     }
//   };
// };

export const UserActions = UserSlice.actions;
export default UserSlice.reducer;
