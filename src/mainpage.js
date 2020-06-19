import React from 'react';
import './App.css';

import Search from './components/search';
import Menu from './components/menu';
import CardView from './components/CardView';

function MainPage(props) { 
  
  return (
    <div className="App">

    <Search />
    <Menu />

    <CardView title={props.title} channel={props.channel} image={"./router"}/>

    </div>
  );
}

export default MainPage;
