import React, { Component } from 'react';
import Modal from 'react-modal';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  showModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    return (
      <div className="Main">
        <h3>Main component.</h3>
        <h3>Press the button to show modals</h3>
        <button onClick={::this.showModal}>打開跳窗</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={::this.closeModal}
          contentLabel="警告"
        >
          <h2>這是跳窗</h2>
          <button onClick={::this.closeModal}>關閉它！</button>
        </Modal>
      </div>
    );
  }
}

export default Main;
