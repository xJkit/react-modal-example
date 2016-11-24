import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import Rodal from 'rodal';

class registerModal extends Component {

  static propTypes = {
    registerModalVisible: PropTypes.bool,
    hideModal: PropTypes.func,
  };

  render() {
    const { registerModalVisible, hideModal } = this.props;
    return (
      <Rodal className="register-modal" visible={registerModalVisible} onClose={hideModal}>
        <h1>註冊</h1>
      </Rodal>
    );
  }
}

const mapStateToProps = state => ({
  registerModalVisible: state.registerModalVisible,
});

const mapDispatchToProps = {
  hideModal: actions.register.hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(registerModal);
