import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return (
    <div className={styles.footer}>
        <ul>
            <li><a href='https://www.instagram.com/nixon_souza'><FaInstagram size={30}/></a></li>
            <li><a href='https://github.com/nixonsouza'><FaGithub size={30}/></a></li>
            <li><a href='https://www.linkedin.com/in/nixon-souza/'><FaLinkedin size={30}/></a></li>
        </ul> 
        <p>nixon.souza@icloud.com</p> 
        <p>Nixon Souza © 2024</p> 
    </div>
    )
}

export default Footer