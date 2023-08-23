import { reducercases } from "./constants";

export const initialState = {
  userInfo: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducercases.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case reducercases.SET_NEW_USER:
      return {
        ...state,
        newUser: action.newUser,
      };
    default:
      return state;
  }
};

export default reducer;
