import * as Types from 'actions/ActionTypes';

const aboutReducer = (state = false, action) => {
  switch (action.type) {
    case Types.SHOW_ABOUT_MODAL:
      return true;
    case Types.HIDE_ABOUT_MODAL:
      return false;
    default:
      return false;
  }
};

export default aboutReducer;
