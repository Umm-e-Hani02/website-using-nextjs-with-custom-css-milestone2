import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <div className="social-accounts">
                <div className="links">
                <Link href="https://www.linkedin.com/in/umm-e-hani-400b812b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" >
                    <FontAwesomeIcon icon={faLinkedinIn} className="social-links"/>
                </Link>
                <Link href="https://github.com/Umm-e-Hani02">
                    <FontAwesomeIcon icon={faGithub} className="social-links"/>
                </Link>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2024 &lt;UH/&gt; (Pvt.) LTD. <br /> All Rights Reserved</p>
            </div>
        </footer>
    );
}

