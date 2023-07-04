import { Link } from "react-router-dom"
import Logo from '../assets/images/Logo.png'
import { FaLinkedin, FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius fugit blanditiis quaerat commodi placeat delectus neque eligendi quo ex vero!</p>
                <div className="footer_socials">
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener">< FaLinkedin /></a>
                    <a href="https://Facebook.com/Victor Ibor" target="_blank" rel="noreferrer noopener">< FaFacebook /></a>
                    <a href="https://Twitter.com/" target="_blank" rel="noreferrer noopener">< AiOutlineTwitter /></a>
                    <a href="https://instagram.com/Victor_Ibor_Tech" target="_blank" rel="noreferrer noopener">< AiOutlineInstagram /></a>
                </div>
            </article>

            <article>
               <h4>Support</h4>
               <Link to="/s">Privacy Policy</Link>
               <Link to="/s">Cookies Policy</Link>
               <Link to="/s">Purchase Policy</Link>
               <Link to="/s">Terms & Conditions</Link>
               <Link to="/s">Cookies</Link>
           </article>

            <article>
                <h4>Links</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/Team">Team</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>

            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact</Link>
                <Link to="/s">Sponsor</Link>
                
            </article>
        </div>
        <div className="footer_copyright">
            <small>2023 VictorIborTech &copy; All Right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer