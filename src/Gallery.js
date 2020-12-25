import React from 'react';
import {Carousel, Image, Media } from 'react-bootstrap';
import styled from 'styled-components';
import Footer from './components/Footer';

// eslint-disable-next-line
const Styles = styled.div`

   .image{
     height: 50%;
   }
`;

export const Gallery = () => (
    <div>
        <h2>My Gallery</h2>
        <p>
        This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.
        </p>


    <div>
    <Carousel>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="./img/imgB.jpg"
      alt="First-slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  
  <Carousel.Item>
    <Image
      className="d-block w-100 "
      src="./img/imgBB.jpg" height ={400}
      alt="Third-slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100 " 
      src="./img/photo.jpg" height ={400}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>

  <br></br><br></br><br></br><br></br>
  <hr></hr>
  <br></br><br></br>

  <div className="section-header">
  <Media>
    <img
      width={64}
      height={64}
      className="align-self-start mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>

  <Media>
    <img
      width={64}
      height={64}
      className="align-self-center mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>

  <Media>
    <img
      width={64}
      height={64}
      className="align-self-end mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p className="mb-0">
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>
</div>
  <Footer />
    </div>
)