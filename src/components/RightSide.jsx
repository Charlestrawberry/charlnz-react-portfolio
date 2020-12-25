import React from 'react';
import {Image} from 'react-bootstrap';
import styled from 'styled-components';


/*const Section = styled.div`
    .section-image {
        top: 50%;
        margin-left: 100px;
        margin-top: 100px
        height: 
        width: 
        display:
        border: none;
    }

`*/


const RightSide = () => {
    return (
        
        <div className='section-image'>
            <Image src="./img/reality.jpg" alt="Charlnz graphic" thumbnail style={{border:"none",
        }}   />
        </div>
        
    )
}

export default RightSide;
