import React from 'react';
import {useState, useEffect} from "react";
import {Nav, Navbar, Container} from "react-bootstrap";
import logo from './fish.png';
import navIcon1 from './nav-icon1.png';
import navIcon2 from './nav-icon2.png';
import navIcon3 from './nav-icon3.png';
import {HashLink} from 'react-router-hash-link';
import {BrowserRouter as Router} from 'react-router-dom';
import './app.css';

export const NavBar = () => {

  const [activeLink, secActiveLink] = useState('home');
  const[scrolled, setScrolled] = useState(false);

  useEffect(()=>{
      const onScroll = () =>{ 
      if(window.screenY > 50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
      }
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);

  }, []);

  const onUpdateActiveLink = (value) => {
    secActiveLink(value);
  }

  return (

        <Navbar expand='md' className={scrolled ? "scrolled": ""}>
            <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link' : 'navbar-link'}
                onClick={()=> onUpdateActiveLink('home')}> Home </Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link' : 'navbar-link'}
                onClick={()=> onUpdateActiveLink('skills')}> Skills </Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link' : 'navbar-link'}
                onClick={()=> onUpdateActiveLink('projects')}> Projects </Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>

  );
};