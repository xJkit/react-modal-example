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
        <Rodal visible={visible} onClose={hideModal} animation="door">
          <h1>登入</h1>
          <hr />
          <form>
            <label htmlFor="name">姓名</label>
            <input type="text" id="name" />
            <br />
            <label htmlFor="phone">電話</label>
            <input type="text" id="phone" />
            <br />
            <button>提交</button>
          </form>
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
