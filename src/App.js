import React from 'react';
import './App.css';

import Search from './components/search';
import Menu from './components/menu';
import CardView from './components/CardView';

function App() { 
  
  return (
    <div className="App">

    <Search />
    <Menu />

    <CardView/>

    </div>
  );
}

export default App;
