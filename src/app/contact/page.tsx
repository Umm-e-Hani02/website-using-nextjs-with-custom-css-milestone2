import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return (
        <section>
            <div className="contact-card">
            <h1 className="contact-heading">Contact us</h1> 
                <div className="contact">
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} className="icon"/> <span>uh21@gmail.com</span>
                    </div><br />
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} className="icon"/> <span>Karachi, Pakistan</span>
                    </div><br />
                    <div>
                        <FontAwesomeIcon icon={faPhone} className="icon"/> <span>021234567890</span>
                    </div><br />
                    <div>
                        <FontAwesomeIcon icon={faClock} className="icon"/> <span>Monday-Saturday : 9:00am - 5:00pm</span>
                    </div>
                </div>
            <div className="location">
                <img src="location.png" alt="location"  className="location-img"></img>
            </div>
            </div>
        </section>
    );
}
