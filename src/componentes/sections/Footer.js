import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/hugozauad/' target='blank'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/HugoZAuad' target='blank'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/hugozauad/' target='blank'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>hugozeymer@hotmail.com</p>
            <p><strong>Hugo Zeymer Auad ₢ 2023</strong></p>
        </div>
    )
}

export default Footer