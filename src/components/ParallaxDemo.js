import React from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import photo from '../assets/photo.jpg';


const inlineStyle ={
    fontSize : "25px",
    color:' white',
    position: 'absolute',
    textAlign: 'center',
   
  }

const Styles = styled.div`
  .parallax{
      background-image: url(${photo});
      height: 500px;
      margin: 20px 0px 20px 0px;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  .caption{
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    color: #000;
  }  

  .caption span.border{
    background-color: #111;
    color: #fff;
    padding: 18px;
    font-size: 25px;
    letter-spacing: 10px;
  }
  }
`;


function ParallaxDemo() {
    return (
      <div className='container'>
      <Styles>
        
        <ParallaxProvider> 
        
        <div class="parallax">
          <div className='caption' style={inlineStyle
            }>
            <span className="border">Up 
            </span>
                
          </div>
      </div>
      
      </ParallaxProvider>
        <ParallaxProvider> 
        
        <div class="parallax">
          <div className='caption' style={inlineStyle
            }>
            <span className="border"> Down 
            </span>
                
          </div>
      </div>
      
      </ParallaxProvider>
        <ParallaxProvider> 
        
        <div class="parallax">
          <div className='caption' style={inlineStyle
            }>
            <span className="border">Scroll Down 
            </span>
                
          </div>
      </div>
      
      </ParallaxProvider>
        <ParallaxProvider> 
        
        <div class="parallax">
          <div className='caption' style={inlineStyle
            }>
            <span className="border">and  
            </span>
                
          </div>
      </div>
      
      </ParallaxProvider>
      
      </Styles>
      </div>
    )
}

export default ParallaxDemo
