import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
import React from 'react';
import {Link, Element, animatedScroll as scroll} from 'react-scroll';
 
function Navbar(){
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Link to="Presentation1" smooth={true} duration={500}>Apresentação</Link></li>  
                <li><Link to="Skills1" smooth={true} duration={500}>Habilidades</Link></li>
                <li><Link to="Projects1" smooth={true} duration={500}>Projetos</Link></li>
            </ul>
            <ul>
                <li><a target="_blank" href='https://www.instagram.com/nixon_souza'><FaInstagram size={30}/></a></li>
                <li><a target="_blank" href='https://github.com/nixonsouza'><FaGithub size={30}/></a></li>
                <li><a target="_blank" href='https://www.linkedin.com/in/nixon-souza/'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar