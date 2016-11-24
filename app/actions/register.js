import * as Types from './ActionTypes';

export const showModal = () => ({
  type: Types.SHOW_REGISTER_MODAL,
  visible: true,
});

export const hideModal = () => ({
  type: Types.HIDE_REGISTER_MODAL,
  visible: false,
});
