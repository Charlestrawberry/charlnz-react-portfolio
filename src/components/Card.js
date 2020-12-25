import React, { useEffect } from 'react'
import CardItem from './CardItem';
import './Card.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Card() {
    useEffect(()  => {
        Aos.init ({ duration: 2000 });
      }, []);
      
      
    return (
        <div>
        <div className='cards'>
            <h1 data-aos='fade-up'>
                Check out these EPIC Designs
            </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items list-unstyled'>
                        <CardItem 
                        src='./img/poster.jpg'
                        text='Explore this design and see what we mean'
                        label='Poster collections'
                        path='/services' 
                        />
                        <br></br><br></br>
                        <CardItem 
                        src='./img/poster.jpg'
                        text='Explore this design and see what we mean'
                        label='Poster collections'
                        path='/services' 
                        />
                    </ul>
                    <br></br><br></br>
                    <ul className='cards__items list-unstyled'>
                        <CardItem 
                        src='./img/poster.jpg'
                        text='Explore this design and see what we mean'
                        label='Poster collections'
                        path='/services' 
                        />
                        <br></br><br></br>
                        <CardItem 
                        src='./img/poster.jpg'
                        text='Explore this design and see what we mean'
                        label='Poster collections'
                        path='/services' 
                        />
                        <br></br><br></br>
                        <CardItem 
                        src='./img/poster.jpg'
                        text='Explore this design and see what we mean'
                        label='Poster collections'
                        path='/services' 
                        />
                    </ul>
                    <ul className='cards__items list-unstyled'>
                        <CardItem 
                        src='./img/poster.jpg'
                        text='Explore this design and see what we mean'
                        label='Poster collections'
                        path='/services' 
                        />
                        <br></br><br></br>
                        <CardItem 
                        src='./img/poster.jpg'
                        text='Explore this design and see what we mean'
                        label='Poster collections'
                        path='/services' 
                        />
                    </ul>

                </div>
            </div>
        </div>
        <hr></hr>
        <div className="section-body">
            <h2>
                UNDER CONTRUCTION BOTTOM OF THE CARD.
            </h2>
        </div>
        </div> 
        
    )
}

export default Card
