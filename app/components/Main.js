import React, { Component } from 'react';
import NavBar from './NavBar';
// Modals
// import 'style!css!rodal/lib/rodal.css';
import AboutModal from './Modal/aboutModal';
import LoginModal from './Modal/loginModal';


class Main extends Component {

  render() {
    return (
      <div className="Main">
        <NavBar />
        <hr />
        <h1>這是首頁</h1>
        <AboutModal />
        <LoginModal />
      </div>
    );
  }
}

export default Main;
