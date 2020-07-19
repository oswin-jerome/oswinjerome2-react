import React from 'react';
import './App.scss';
import NavBar from './Layouts/NavBar/NavBar';
import HomePage from './Pages/Home/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
