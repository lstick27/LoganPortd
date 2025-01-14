import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import logo from './logo.png';

import foot1Icon from './nav-icon1.png';
import foot2Icon from './nav-icon2.png';
import foot3Icon from './nav-icon3.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Row className="align-items-center">
                
                <Col size={12} sm={6}>
                    <img src={logo} alt = "Logo" /> 
                </Col>
                <Col size={12} sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="#"><img src={foot1Icon} alt ="Icon" /> </a> 
                        <a href="#"><img src={foot2Icon} alt ="Icon" /> </a> 
                        <a href="#"><img src={foot3Icon} alt ="Icon" /> </a> 
                    </div>
                    <p>Copyright 2024. All Rights Reserved</p>
                </Col>
            </Row>
        </footer>
    );
};
