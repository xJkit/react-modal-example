import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import Rodal from 'rodal';

class loginModal extends Component {

  static propTypes = {
    visible: PropTypes.bool,
    hideModal: PropTypes.func,
  }

  render() {
    const { visible, hideModal } = this.props;
    return (
      <div className="login-modal">
        <Rodal visible={visible} onClose={hideModal}>
          <h1>登入</h1>
        </Rodal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.loginModalVisible,
});
const mapDispatchToProps = {
  hideModal: actions.login.hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(loginModal);
