import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import Rodal from 'rodal';

class registerModal extends Component {

  static propTypes = {
    visible: PropTypes.bool,
    hideModal: PropTypes.func,
  };

  render() {
    const { visible, hideModal } = this.props;
    return (
      <Rodal
        className="register-modal"
        visible={visible}
        onClose={hideModal}
        showCloseButton={false}
      >
        <h1>註冊</h1>
        <p>快點來註冊把！</p>
        <p>我把右上角的 X 給 disable 掉了，請按下面的關閉按鈕</p>
        <button onClick={hideModal}>關閉</button>
      </Rodal>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.registerModalVisible,
});

const mapDispatchToProps = {
  hideModal: actions.register.hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(registerModal);
