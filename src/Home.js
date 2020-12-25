import React from 'react';
import { Button } from 'react-bootstrap';
import Mobile from './assets/videos/mobile.mp4';
import HomeAnima from './components/HomeAnima';
import './Home.css';
import { Link } from 'react-router-dom';


export const Home = () => (
  
    <div className="container centre">
        <div>
          <video autoPlay loop muted
           style={{
            position: 'absolute',
            width: '100%',
            left: '50%',
            top: '50%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
           }}
          >
              <source src={Mobile} type= 'video/mp4' />
          </video>
        </div>
        <br></br>
        <div className='row'>
          <div className='col'>
        <HomeAnima />
        <div className='Home-btns'>
        <Button className='btns'>
          <Link to='/about'>GET STARTED</Link>
        </Button>
        </div>
        </div>
        
        </div>
    </div>

    
    
)

