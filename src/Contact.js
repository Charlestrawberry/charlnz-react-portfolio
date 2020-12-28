import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import  LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Footer from './components/Footer'


const social  =['facebook', 'github',  'twitter'];
const socialList = social.map(social => <li>{social}</li>)


export const Contact = () => (
    <div>
      <div>
        <ul>{socialList}</ul>
      </div>


      window.alert("Dont leave without saying hi");
        <h2>Contact Us</h2>

        <span><a target= "_blank" rel=''  href= "http://www.google.com"><Button> Click Me</Button></a></span>
        
        <a target='_blank' rel='' href="http://www.facebook.com">Facebook </a>
        <p>   
        This HTML file is a template.
      To begin the development, run.
      To create a production bundle, usyarn builThis HTML file is a template.
      If you open it directly in the browser, you will see an empty page.      
        </p>
        <br></br>
       <br></br> <br></br> <br></br> <br></br>
      
      <div className="App">
        <Row className="landing">
          <Col><LeftSide /></Col>
          <Col><RightSide /></Col>
        </Row>
      </div>

    <Footer />
        
    </div>
)