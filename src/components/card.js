import React from 'react';
import './card.css';

export default function Card(props) {
    return (
        <div>
            <div className='card'>
                <div className='card-child-1'>
                    <img className='card-img' src={props.image} alt="new" />
                </div>
                <div className='card-child-2'>
                    <p className='card-title'>{props.title}</p>
                    <p className='card-description'>{props.desc}</p>
                    <a className='card-link' href={props.link}>Read More </a>

                </div>
            </div>
            
        </div>
    )
}
