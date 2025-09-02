import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">
          <span className="title-main">Super Metroid</span>
          <span className="title-sub">100% Speedrun Guide</span>
        </h1>
        <div className="subtitle">
          Complete item checklist with images • World Record: 1:12:17 by ShinyZeni
        </div>
      </div>
      <div className="header-bg"></div>
    </header>
  );
};

export default Header;
