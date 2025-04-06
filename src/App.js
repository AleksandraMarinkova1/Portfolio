
import React from 'react';
import Footer from '../src/footer/Footer.jsx'
import Nav from '../src/nav/Nav.jsx' 
import About from '../src/about/About.jsx'
import Experience from './experience/Experience.jsx';
import Contacts from './contacts/Contacts.jsx';
import Header from './header/Header.jsx';

function App() {
  return (
    <>
    <Header/>
     <About/>
     <Experience/>
     <Nav/>
     <Contacts />
     <Footer/>
     </>
  );
}

export default App;
