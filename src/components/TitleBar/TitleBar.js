import React from 'react';
import './TitleBar.css';

const TitleBar = ({ title }) => {
  return (
    <header className="titlebar">
      <div className="titlebar-container">
        <h1 className="title">{title}</h1>
      </div>
    </header>
  );
};

export default TitleBar;
