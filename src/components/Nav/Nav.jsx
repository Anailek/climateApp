import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import About from '../About/About.jsx'
import './Nav/Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar">
        <a className="navbar-brand" href="/"> climate app </a>
        <SearchBar onSearch={onSearch}
        />
        <About/>
    </nav>
  );
};

export default Nav;
