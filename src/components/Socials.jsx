import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

export default function Socials() {
    return (
        <div className="social-container">
            <a href="https://github.com/aakashwaani" target="_blank" rel="noopener noreferrer" className="sm-links"><BiLogoGithub size={20} /> GitHub</a>
            <a href="" className="sm-links"><BiLogoTwitter size={20} /> Twitter</a>
            <a href="" className="sm-links"><BiLogoLinkedin size={20} /> Linkedin</a>
        </div>
    )
}

