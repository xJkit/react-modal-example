import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <div className="nav-bar">
    <ul>
      <li>
        <Link>首頁</Link>
      </li>
      <li>
        <Link>關於我</Link>
      </li>
      <li>
        <Link>登入</Link>
      </li>
      <li>
        <Link>註冊</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
