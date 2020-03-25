import React from 'react';
import NavBar from './components/NavBar'
import PlatformComponent from './components/PlatformComponent';
import Navs from './components/Nav'

import './App.css';
import FormFichaya from './FormFichaya';
import Table from './components/Table';
import Person from './components/Person';
import Customer from './components/Customer';
import Page1 from './components/page1';

const style = {
  display: 'flex',
  position: "fixed",
  width: "100%"
}

function App() {
  const [bool, setBool] = React.useState(false)
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 300) {
        setBool(true)
      }else{
        setBool(false)
      }
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  return (
    <div>
      {/* <NavBar style={bool ? style : null} /> */}
      <Navs />
      <Table />
      <PlatformComponent />
      {/* <FormFichaya /> */}
      <Person />
      <Customer />
      <Page1 />
    </div>
  );
}

export default App;
