import {ReactComponent as YoutubeLogo } from "../../assets/youtube-svgrepo-com.svg"
import {ReactComponent as LinkedInLogo } from "../../assets/linkedin-svgrepo-com.svg"
import {ReactComponent as GithubLogo } from "../../assets/github-svgrepo-com.svg"

import './styles.css'

function Footer() {
    return (
        <div className="footer-container">
            <a href="https://www.youtube.com/@codentineinc5889"><YoutubeLogo /></a>
            <a href="https://www.linkedin.com/in/alfonso-banda/"><LinkedInLogo /></a>
            <a href="https://github.com/Poncho0794"><GithubLogo /></a>
    </div>)

}
export default Footer;