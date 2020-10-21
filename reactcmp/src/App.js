import React from 'react';
import './App.css';
import Head from './Components/Head/Head';
import ProfilPhoto from './Components/Home/ProfilPhoto';
import FullName from './Components/Home/FullName';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Address from './Components/Contact/Address';
  

function App() {
  return (
    <div className='App'>
      <Head/>
       <ProfilPhoto/>
       <FullName/>
       <About/>
       <Skills/>
       <Contact/>
       <Address/>     
    </div>
  );
}

export default App;