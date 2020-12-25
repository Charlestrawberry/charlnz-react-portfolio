import React from 'react'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our latest info!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type='email' name='email' placeholder='Enter Email'
                        className='footer-input'
                        /> 
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className= "footer-link-wrapper">
                    <div className='footer-link-items'>
                        <h2> About Us</h2>
                        <Link to='/Testimonials'>Testimonials</Link>
                        <Link to='/Services'>Services</Link>
                        <Link to='/Gallery'>Gallery</Link>
                        <Link to='/Tutorials'>Tutorials</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2> Social Media</h2>
                        <Link to='/'>GitHub</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>YouTube</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>LinkedIn</Link>
                    </div>
                </div>
            </div>
            <sections className='social-media'>
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to=" /" className="social-logo">
                            Charlnz Studio <img src="/" alt="Logo" />
                        </Link>
                    </div>
                    <small className="website-rights">Charlnz Studio <i class="far fa-copyright"></i> 2021</small>
                    <div className="social-icons">
                        <Link 
                        className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="Facebook" >
                            <i className="fab fa-facebook-f" />
                        </Link>


                        <Link 
                        className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="instagram" >
                            <i className="fab fa-instagram" />
                        </Link>


                        <Link 
                        className="social-icon-link youtube"
                        to="/"
                        target="_blank"
                        aria-label="youtube" >
                            <i className="fab fa-youtube" />
                        </Link>


                        <Link 
                        className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label="twitter" >
                            <i className="fab fa-twitter" />
                        </Link>


                        <Link 
                        className="social-icon-link github"
                        to="/"
                        target="_blank"
                        aria-label="github" >
                            <i className="fab fa-github" />
                        </Link>
                        
                        <Link 
                        className="social-icon-link linkedin"
                        to="/"
                        target="_blank"
                        aria-label="linkedin" >
                            <i className="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </sections>
        </div>
    )
}

export default Footer
