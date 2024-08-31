import './Header.css'
import reactLogo from '../../assets/react.svg'
import React from 'react';

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <img
        className="logo"
        src={reactLogo}
        alt="Логотип проекта место"
        />
      <h1>The Place</h1>
    </header>
  );
};

export default Header;
