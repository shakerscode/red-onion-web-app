import React from 'react';
import './Footer.css'
import logo from '../../images/logo.png'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark p-5 '>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src={logo} alt="" height={'40px'} />
                </div>
                <div className='text-white'>
                    <p>About Online Foods</p>
                    <p>About Online Foods</p>
                    <p>About Online Foods</p>
                    <p>About Online Foods</p>
                </div>
                <div className='text-white'>
                    <p>About Online Foods</p>
                    <p>About Online Foods</p>
                    <p>About Online Foods</p>
                    <p>About Online Foods</p>
                </div>
            </div>
        <div>
            <div>
                <p className='text-light'>Copyright  shaker ahamed </p>
            </div>
            <div>
                <p>
                    
                </p>
            </div>

        </div>
        </div>
    );
};

export default Footer;