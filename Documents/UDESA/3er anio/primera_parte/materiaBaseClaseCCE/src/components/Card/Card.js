/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './card.css';

function Card(props){
    return (
        <div className="character-card">
            <img src={`${props.image}`} alt="" />
            <h4>{props.name}</h4>
            <p>Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae molestias? Deleniti vel suscipit voluptatem mollitia vitae. Placeat, incidunt?</p>
            <p className='more'>Ver más</p>
        </div>
    );
}

export default Card