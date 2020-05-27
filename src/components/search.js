import React from 'react';
import '../css/search.css';
import search_icon from '../images/search.png';


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

      </div>
    </div>
    </>
  );

}

export default Search;

