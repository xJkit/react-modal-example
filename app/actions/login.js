import * as Types from './ActionTypes';

export const showModal = () => ({
  type: Types.SHOW_LOGIN_MODAL,
  visible: true,
});

export const hideModal = () => ({
  type: Types.HIDE_LOGIN_MODAL,
  visible: false,
});
