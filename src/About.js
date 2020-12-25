import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Herosection from './components/Herosection';

export const About = () => (
      <Container>
  <div>
        <Herosection />
        <br></br>
        <h2>My SKills </h2>

      <div className="row centre">
        <div className='col-1'>
        <span > <i class="fab fa-js"></i> JavaScript</span>
        <span > <i class="fab fa-html5"></i> HTML</span>
        <span > <i class="fab fa-css3"></i> CSS</span>
        <span > <i class="fab fa-node"></i> Node.js</span>
        <span > <i class="fab fa-react"></i> React</span>
        <span > <i class="fab fa-bootstrap"></i> Bootstrap</span>
        </div>

        <div className="col-2">
        <span > <i class="fab fa-wordpress"></i> Wordpress</span>
        <span > <i class="fab fa-js"></i> VS code</span>
        <span > <i class="fab fa-github"></i> GitHub</span>
        <span > <i class="fab fa-gitter"></i> Netlify</span>
        <span > <i class="fal fa-code"></i> Responsive Design</span>
          
        </div>
      </div>  
      <br></br>
        <div>
          I have acquired good skills in React, React-bootstrap
          bootstrap and wordpress.

        </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
    <div>
      <Footer />
    </div>
  </div>
  </Container>
)