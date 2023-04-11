import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <div className="my-container">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </>
  );
};

export default App;