import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/about';
import Rodal from 'rodal';

import 'style!css!rodal/lib/rodal.css';

class aboutModal extends Component {

  static propTypes = {
    aboutModalVisible: PropTypes.bool,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
  };

  render() {
    const { aboutModalVisible: visible, showModal, hideModal } = this.props;
    return (
      <div className="about-modal">
        <Rodal visible={visible} onClose={hideModal}>
          <h1>超酷炫 Rodal!</h1>
        </Rodal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  aboutModalVisible: state.aboutModalVisible,
});

const mapDispatchToProps = {
  showModal: actions.showModal,
  hideModal: actions.hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(aboutModal);
