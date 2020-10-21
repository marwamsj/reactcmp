import React from 'react';
import myme  from './me.jpg';
import './Home.css'


function ProfilPhoto() {
    return (
        <div className='stylme'>
            <img className='myphoto' src={myme} alt='me'/>
            
        </div>
    );
};

export default ProfilPhoto;
