import React, { Component } from "react";
import logo from './img/logo.png'
import { Link } from 'react-router-dom'


class Header extends Component{
  render(){
    return(
      <header>
          <nav className="navbar navbar-expand-lg custom-navbar">
                <h1>
                    <Link to="/">
                        <a className="navbar-brand" href="#"><img src={logo} alt="Logo" className="logo" /></a>
                    </Link>
                </h1>
                <div className="nav-btn-bx">
        			<div className="hamburger navbar-toggler collapsed" id="hamburger-1"  data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        				<span className="line"></span>
        				<span className="line"></span>
        				<span className="line"></span>
        			</div>
    		    </div>
                <div className="navbar-collapse collapse navbar-cust" id="navbarsExample05">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/about" className="nav-link">About us</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/contact" className="nav-link">Contact us</Link>
                        </li>
                    </ul>
                </div>
          </nav>
      </header>

    );
  }
}


export default Header;
