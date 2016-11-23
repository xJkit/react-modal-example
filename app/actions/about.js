import * as Types from './ActionTypes';

export const showModal = () => ({
  type: Types.SHOW_ABOUT_MODAL,
  visible: true,
});

export const hideModal = () => ({
  type: Types.HIDE_ABOUT_MODAL,
  visible: false,
});
