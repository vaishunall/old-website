import React, {Component} from 'react';
import "./Header.css";
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa';
import {MenuItems} from "./MenuItems";
import logoSphere from "../../assets/sphere_icon.png";

class Header extends Component {

    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className='NavbarItems'>
                <div className='logo-flex'>
                    <h1 className="logo">vyshnavi nalla</h1>
                    <img style={{height: "35px", paddingLeft: "10px"}} src={logoSphere}></img>
                </div>
                

                <div className='menu-icon' onClick={this.handleClick}>
            
                    {this.state.clicked ? <FaTimes className='fa-times'></FaTimes>
                    : <FaBars className='fa-bars'></FaBars>}
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            <li>
                                <a className="nav-links" href="#">
                                    projects
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" href="#">
                                    skills
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" href="#">
                                    leadership
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" href="#">
                                    contact
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" href="#">
                                    resume
                                </a>
                            </li>
                    
                </ul>
                
                <h1 className="icon-links" href="#">
                    <FaGithub> </FaGithub>
                </h1>
                <h1 className="icon-links" href="#">
                    <FaLinkedin> </FaLinkedin>
                </h1>
              
                
            </nav>
        )
    }
}

export default Header;