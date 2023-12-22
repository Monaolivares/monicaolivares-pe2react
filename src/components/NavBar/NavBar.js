import React from "react"; 
import ReactDom from "react-dom/client"; 
import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import "./NavBar.css"; 
import Logo from "../../img/botica.png"

//components
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Textil from "../sections/textil"; 

const NavBar = () => {
    return (
        <nav className="NavBar">
            
                <div className="Header-navbar">
                    <img src={Logo} className="img-navbar"></img>
                    <h2 className="H2-nav">Botica Bosque</h2>
                </div>
         
           <div className="BotonesNavbar">
                <span className="Botones"><Link to='/'> <p className="Link">Botica Bosque </p></Link></span>
                <span className="Botones"><NavLink to={`/category/cosmetica`} className={({ isActive}) =>isActive? 'ActiveOption' : 'Option'}><p className="Link">Cosmetica Natural</p></NavLink></span>
               <span className="Botones"> <NavLink to={`/category/licores`} className={({ isActive}) =>isActive? 'ActiveOption' : 'Option'}><p className="Link">Licores</p></NavLink></span>
               <span className="Botones">  <NavLink to={`/category/textil`} className={({ isActive}) =>isActive? 'ActiveOption' : 'Option'}><p className="Link">Textil</p></NavLink></span>
              
                <div className="Cart-widget">
                    <CartWidget/>
                </div>

           </div>
        </nav>          
    )
}

export default NavBar



