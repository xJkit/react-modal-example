import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/about';
import Rodal from 'rodal';

// import 'style!css!rodal/lib/rodal.css';

class aboutModal extends Component {

  static propTypes = {
    visible: PropTypes.bool,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
  };

  render() {
    const { visible, hideModal } = this.props;
    return (
      <div className="about-modal">
        <Rodal visible={visible} onClose={hideModal}>
          <h1>關於我：</h1>
          <hr />
          <p>I am Jay, a JavaScript developer, recently working on React propject.</p>
          <button className="button" onClick={hideModal}>關閉</button>
        </Rodal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.aboutModalVisible,
});

const mapDispatchToProps = {
  showModal: actions.showModal,
  hideModal: actions.hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(aboutModal);
