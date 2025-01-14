import React from 'react';
import './app.css';
import {Projects} from './Projects.jsx';
import {Contact} from './Contact.jsx';
import {NavBar} from './NavBar.jsx';

const Home = () => {
  return (
    <div>
        <Projects />
        <Contact />
        <NavBar />

    </div>
  );
};

export default Home;

