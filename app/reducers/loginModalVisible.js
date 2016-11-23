import * as Types from 'actions/ActionTypes';

const loginReducer = (state = false, action) => {
  switch (action.type) {
    case Types.SHOW_LOGIN_MODAL:
      return true;
    case Types.HIDE_LOGIN_MODAL:
      return false;
    default:
      return state;
  }
};

export default loginReducer;
