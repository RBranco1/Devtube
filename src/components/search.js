import React from 'react';
import '../css/search.css';
import search_icon from '../images/search.png';
import 'semantic-ui-react'
import Menu from './menu';


function Search() {
  return (
    <>
    <div class="logobar">

      <div class="logo">
        <p>DevTube</p>
      </div>
      <div class ="searchbar">

        <input 
        type="text" 
        placeholder="Lets go!" 
        class="search"
        />

  <button> <img src={search_icon} /> </button>
  <button class="login" >Sign in</button>
  

      </div>
    </div>
    </>
  );

}

export default Search;