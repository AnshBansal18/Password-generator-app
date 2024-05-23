import React from 'react';
import './Styles.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header-container bg-gradient-radial text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-semibold">Password Generator App</h1>
      </div>
    </header>
  );
};

export default Header;
