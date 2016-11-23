import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class Navbar extends Component {

  static propTypes = {
    showAboutModal: PropTypes.func,
    hideAboutModal: PropTypes.func,
    showLoginModal: PropTypes.func,
    hideLoginModal: PropTypes.func,
    aboutModalVisible: PropTypes.bool,
    loginModalVisible: PropTypes.bool,
  };

  render() {
    const { showAboutModal, showLoginModal } = this.props;
    return (
      <div className="nav-bar">
        <ul>
          <li>
            <button onClick={showAboutModal}>關於我</button>
          </li>
          <li>
            <button onClick={showLoginModal}>登入</button>
          </li>
          <li>
            <button>註冊</button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  aboutModalVisible: state.aboutModalVisible,
  loginModalVisible: state.loginModalVisible,
});

const mapDispatchToProps = {
  showAboutModal: actions.about.showModal,
  hideAboutModal: actions.about.hideModal,
  showLoginModal: actions.login.showModal,
  hideLoginModal: actions.login.hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
