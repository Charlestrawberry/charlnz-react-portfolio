import React, { useEffect } from 'react';
import Aos from 'aos';
import { Media } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.header {
  background-color: rgb(209, 222, 241);
  padding: 50px;
  margin: 20px 0 20px 0;

}

@media screen and (max-width: 768px) {
  .header{
    padding-right: 100px;
    margin: 0px 0px;
    }

  .header-image{
    height:50%;
    width: 50%;
  }
  p{
    font-size: 16px;
  }
  h5{
    font-size: 18px;
  }
}
`;

function myImage(e) {
  e.target.setAttribute('src', "./img/photo.jpg");
  e.target.setAttribute('alt', "myself");
  
}


const Herosection = () => {
  
    useEffect(()  => {
        
        Aos.init ({ duration: 3000 });
      }, []);
      
    return (      
      <div className='container '>
      
        <Styles>
        <div className='header-head'> 
        <div data-aos= 'zoom-in'>
            <h2 style={{
              textAlign: '',
            }}
            
            >ABOUT ME</h2>
        </div>
      <div className='header'> 
        <Media>
    <img 
    onClick={myImage}
    className='header-image align-self-center mr-5'
      width={270}
      height={270}
      src="./img/ceo.jpg"
      alt="Generic placeholder"
    />

    <Media.Body>
      <h5 className=''
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
  </div>
  </div>
        </Styles>
        
  </div>
    )
}


export default Herosection;