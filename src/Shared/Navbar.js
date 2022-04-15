import React from 'react';
import logo from '../images/logo2.png'
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { ShoppingCartIcon } from '@heroicons/react/solid'


const Nav = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" height={'30px'} /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">       
                        <div className='nav-sec'>
                        <Link to='/'>Home</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/sign-up'>SignUp</Link>
                     
                            <ShoppingCartIcon className='icon'>
                                
                            </ShoppingCartIcon>
                        
                        </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Nav;