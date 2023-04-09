import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className='my-container'>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default App;