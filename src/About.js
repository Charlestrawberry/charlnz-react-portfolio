import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Herosection from './components/Herosection';
import ParallaxDemo from './components/ParallaxDemo';
import './About.css';

export const About = () => (
      <Container>
  <div className='container'>
    
      

        <Herosection />

        
        <ParallaxDemo />
        
        <div  className='about-header'>
        <div>
        <h2>MY SKILLS</h2>
        </div>
        <div>
         <p> I have acquired good skills in React, React-bootstrap
          bootstrap and wordpress.</p>
        </div>
        
      <div className="social-icon-items">
        <div className='row'>
        <div className='social-icon-links col-lg-6'>
        <div><span > <i class="fab fa-js"></i> JavaScript</span></div>
        <div><span > <i class="fab fa-html5"></i> HTML</span></div>
        <div><span > <i class="fab fa-css3"></i> CSS</span></div>
        
        <div><span > <i class="fab fa-node"></i> Node.js</span></div>
        <div><span > <i class="fab fa-react"></i> React</span></div>
        <div><span > <i class="fab fa-bootstrap"></i> Bootstrap</span></div>
        
        </div>

        <div className="social-icon-links col-lg-6 ">
        <div><span > <i class="fab fa-wordpress"></i> Wordpress</span></div>
        <div><span > <i class="fab fa-js"></i> VS code</span></div>
        <div><span > <i class="fab fa-github"></i> GitHub</span></div>
        
        <div><span > <i class="fab fa-gitter"></i> Netlify</span></div>
        <div><span > <i class="fal fa-code"></i> Responsive Design</span></div>
        
        </div>

      </div> 
      </div> 
      
      </div>
      
      
      
      
    <div>
      <Footer />
    </div>
  </div>
  </Container>
)