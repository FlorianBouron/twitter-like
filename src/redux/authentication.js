import config from "../config";

const LOGIN_SUCCESS = "authentication/LOGIN_SUCCESS";
const LOGOUT_SUCCESS = "authentication/LOGOUT_SUCCESS";

const initialState = {
  userId: sessionStorage.getItem(config.sessionStorageUserID)
    ? sessionStorage.getItem(config.sessionStorageUserID)
    : ""
};

export const loginUser = user => {
  return dispatch => {
    dispatch({
      type: LOGIN_SUCCESS,
      data: user
    });
  };
};

export const logoutUser = token => {
  return dispatch => {
    dispatch({
      type: LOGOUT_SUCCESS,
      data: token
    });
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const data = action.data;
      sessionStorage.setItem(config.sessionStorageUserID, data);
      return Object.assign({}, state, { userId: data });
    case LOGOUT_SUCCESS:
      sessionStorage.removeItem(config.sessionStorageUserID);
      return Object.assign({}, state, { userId: "" });
    default:
      return state;
  }
}
