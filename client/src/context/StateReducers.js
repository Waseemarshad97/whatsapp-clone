import { reducercases } from "./constants";

export const initialState = {
  userInfo: undefined,
  newUser: false,
  contactsPage: false,
  currentChatUser: undefined,
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
    case reducercases.SET_ALL_CONTACTS_PAGE:
      return {
        ...state,
        contactsPage: !state.contactsPage,
      };
    case reducercases.CHANGE_CURRENT_CHAT_USER:
      return {
        ...state,
        currentChatUser: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
