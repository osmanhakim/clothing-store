import { createSlice } from "@reduxjs/toolkit";
import { UserActions } from "./user";
export const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    AccessToken: "",
    ExpAccessToken: "",
    RefreshToken: "",
    ExpRefreshToken: "",
    lang: "en",
    i18n: null,
  },

  reducers: {
    setToken(state, action) {
      const { accessToken, expAccessToken, refreshToken, expRefreshToken } =
        action.payload;
      state.AccessToken = accessToken;
      state.ExpAccessToken = expAccessToken;
      state.RefreshToken = refreshToken;
      state.ExpRefreshToken = expRefreshToken;
    },
    deleteToken(state) {
      state.AccessToken = "";
      state.ExpAccessToken = "";
      state.RefreshToken = "";
      state.ExpRefreshToken = "";
    },
    changeLanguage(state, action) {
      state.lang = action.payload;
      state.i18n.changeLanguage(action.payload);
      document.documentElement.lang = action.payload;
      //document.documentElement.dir = action.payload == "ar" ? "rtl" : "ltr";
    },
    setI18n(state, action) {
      state.i18n = action.payload;
    },
    setLoginError(state, action) {
      state.loginError = action.payload;
    },
  },
});

export const LogoutAction = () => {
  return async (dispatch, getState) => {
    try {
      const cs = await fetch("http://localhost:8000/sanctum/csrf-cookie", {
        credentials: "include",
      });

      if (!cs.ok) {
        alert("Failed to get CSRF token. Please try again.");
      }
      let response = await fetch("http://localhost:8000/api/logout", {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          "Accept-Language": getState().Auth.lang,
          Authorization: `Bearer ${getState().Auth.AccessToken}`,
        },
        credentials: "include",
      });

      if (response.ok) {
        //  dispatch(AuthActions.setLoginError(false));
        const data = await response.json();
        dispatch(AuthActions.deleteToken());
        dispatch(UserActions.delUser());
        console.log(data);
        console.log(`Bearer ${getState().Auth.AccessToken}`);
      } else {
        // dispatch(AuthActions.setLoginError(true));
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const LoginAction = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const cs = await fetch("http://localhost:8000/sanctum/csrf-cookie", {
        credentials: "include",
      });

      if (!cs.ok) {
        alert("Failed to get CSRF token. Please try again.");
      }
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": getState().Auth.lang,
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        console.log("logging succefully");
        const data = await response.json();
        console.log(data);
        // dispatch(UserActions.setUser({ ...data.user }));
        console.log(data.session.access_token);
        dispatch(
          AuthActions.setToken({
            accessToken: data.session.access_token,
            expAccessToken: data.session.accessTokenEXP,
            refreshToken: data.session.refresh_token,
            expRefreshToken: data.session.refreshTokenEXP,
          })
        );

        dispatch(UserActions.setUser(data.user));
        console.log(data.user);
        //alert("Login successful!");
      }
    } catch (ex) {
      console.log(ex);
      // alert("Login failed. Please check your credentials.");
    }
  };
};

export const AuthActions = AuthSlice.actions;
export default AuthSlice.reducer;
