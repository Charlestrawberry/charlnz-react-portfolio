import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import photo from '../assets/photo.jpg';


const Styles = styled.div`
    .jumbotron{
        background: url(${photo}) no-repeat fixed bottom;
        background-size: cover;
        background-attachment: fixed;
        color: #bbb;
        height: 200px;
        position: relative;
        z-index: -2      
    }

    .Jumbo h1 {
        font-size: 50px;
        align-items: center;
        text-align: center;

    }
    @media screen and (max-width: 768px) {
        .Jumbo h1 {
            font-size: 25px;
            justify-items:center;
            align-items: center;
        }
      }
    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    
`;



export const Jumbotron = () =>(
    <Styles>
        <Jumbo fluid className= "Jumbo">
            <div className="overlay"></div>
            <Container>
                <h1> WELCOME TO MY STUDIO</h1>
               
            </Container>
        </Jumbo>
    </Styles>
)

