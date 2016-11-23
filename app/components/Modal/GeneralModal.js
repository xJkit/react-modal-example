import React, { PropTypes, Component } from 'react';
import Modal from 'react-modal';

class GeneralModal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
    };
  }

  show() {
    this.setState({
      visible: true,
    });
  }

  hide() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const customStyles = {
      content: {
        backgroundColor: 'red',
        color: 'blue',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
      overlay: {
        backgroundColor: 'rgba(0,0,0,.5)',
      },
    };

    return (
      <Modal
        isOpen={this.state.visible}
        onRequestClose={::this.hide}
        style={customStyles}
      >
        <h2>General Modal Title</h2>
        <p>這是最最一般的 react-modal 跳窗</p>
        <form action="">
          <label htmlFor="name">姓名</label>
          <input type="text" id="name" />
          <br />
          <label htmlFor="phone">電話</label>
          <input type="text" id="phone" />
        </form>
        <button onClick={::this.hide}>關閉跳窗</button>
      </Modal>
    );
  }
}

export default GeneralModal;
