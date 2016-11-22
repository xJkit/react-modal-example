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
        <button onClick={evt => this.showModal(evt)}>show modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="警告"
        />
      </div>
    );
  }
}

export default Main;
