import React from 'react';
import '../css/menu.css';
import {Link} from "react-router-dom";


function Menu(){

    return(  
        
<div class="menu">
<ul class="table li" >
    <li > Java </li>
    <li><Link to="/python"> Python </Link></li>
    <li><Link to="/c"> C </Link></li>
    <li><Link to="/js"> Javascript </Link></li>
    <li><Link to="/ruby"> Ruby </Link></li>
    <li><Link to="/html"> HTML </Link></li>
    <li><Link to="/php"> PHP </Link></li>
    <li><Link to="sql"> SQL </Link></li>
    <li><Link to="/c#">C# </Link></li>
    <li><Link to="/c++"> C++ </Link></li>
    <li><Link to="/lua"> Lua </Link></li>
    <li><Link to="/swift">Swift </Link></li>
    <li><Link to="/kotlin"> Kotlin </Link></li>

    
</ul>
</div>
);

}

export default Menu;