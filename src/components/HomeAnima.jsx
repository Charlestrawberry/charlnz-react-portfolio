import React, { useEffect } from 'react';
import Aos from 'aos';
import './HomeAnima.css'
import styled from 'styled-components';



const Headers = styled.div`

`;


const HomeAnima = () => {
    useEffect(()  => {
        
        Aos.init ({ duration: 2000 });
      }, []);
      
    return (
        <Headers>
          <div className='HomeAnima-container'>
        <div data-aos= 'flip-up' className='HomeAnima-header'>
        <h1>
          Charlnz Graphic Plug
        </h1>
        <p> Your Finest Graphic Design Plug</p>
        </div>
        </div>
        </Headers>
    )
}


export default HomeAnima;