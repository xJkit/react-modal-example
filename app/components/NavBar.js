import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class Navbar extends Component {

  static propTypes = {
    showAboutModal: PropTypes.func,
    showLoginModal: PropTypes.func,
    showRegisterModal: PropTypes.func,
  };

  render() {
    const { showAboutModal, showLoginModal, showRegisterModal } = this.props;
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
            <button onClick={showRegisterModal}>註冊</button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = {
  showAboutModal: actions.about.showModal,
  showLoginModal: actions.login.showModal,
  showRegisterModal: actions.register.showModal,
};

export default connect(() => ({}), mapDispatchToProps)(Navbar);
