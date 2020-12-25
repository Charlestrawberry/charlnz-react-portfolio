import React, { useEffect } from 'react';
import Aos from 'aos';
import { Media } from 'react-bootstrap';
import styled from 'styled-components';

const Headers = styled.div`
Headers {
  
}
`;


const Herosection = () => {
  
    useEffect(()  => {
        
        Aos.init ({ duration: 3000 });
      }, []);
      
    return (
        <Headers>
        <div data-aos= 'zoom-in' className='Herosection-header'>
            <h2
            styles={{



            }}
            >About Me</h2>
        </div>

        <Media>
    <img
      width={270}
      height={270}
      className="align-self-start mr-3"
      src="./img/ceo.jpg"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5 className='align-self-center mr-5'
      style={{
        fontSize: '30px',
      }}
      >Charles O. Odukoya</h5>
      <p>
        Hi, I'm Charles. I love creative and awesome graphic works.
        I love coding and the experience has been amazing and glorious.

      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque.
      </p>
    </Media.Body>
  </Media>
        </Headers>
    )
}


export default Herosection;