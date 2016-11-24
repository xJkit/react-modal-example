import * as Types from 'actions/ActionTypes';

const registerModalVisible = (state = false, action) => {
  switch (action.type) {
    case Types.SHOW_REGISTER_MODAL:
      return true;
    case Types.HIDE_REGISTER_MODAL:
      return false;
    default:
      return false;
  }
};

export default registerModalVisible;
