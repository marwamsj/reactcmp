import React from 'react'
import './Skills.css' 
import Abaqus from './Abaqus.png'
import Catia from './Catia.png'
import Gimp from './Gimp.png'
import Master from './Master.png'
import Matlab from './Matlab.png'
import Meca from './Meca.png'
import Minitab from './Minitab.png'
import Sap from './Sap.png'
import Solid from './Solid.jpg'
import Trutops from './Trutops.jpg'


function Skills() {
    return (
        <>
            <p className='titr'>My Skills</p>
        <div className='skil'>
            <img src={Abaqus} alt='Aba'></img>
            <img src={Catia} alt='Cat'></img>
            <img src={Gimp} alt='Gimp'></img>
            <img src={Master} alt='Master'></img>
            <img src={Matlab} alt='Mat'></img>
            <img src={Meca} alt='Meca'></img>
            <img src={Minitab} alt='Mini'></img>
            <img src={Sap} alt='Sap'></img>
            <img src={Solid} alt='Slid'></img>
            <img src={Trutops} alt='Trut'></img>
        </div>
        </>
    );
};

export default Skills;
