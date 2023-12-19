import React from "react"; 
import ReactDom from "react-dom/client"; 
import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import "./NavBar.css"; 
import Logo from "../../img/botica.png"

//components
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const NavBar = () => {
    return (
        <nav className="NavBar">
            
                <div className="Header-navbar">
                    <img src={Logo} className="img-navbar"></img>
                    <h2 className="H2-nav">Botica Bosque</h2>
                </div>
         
           <div className="Footer-NavBar">
                <button className="Botones"><Link to='/'> Botica Bosque </Link></button>
                <button className="Botones"><NavLink to={`/category/cosmetica`} className={({ isActive}) =>isActive? 'ActiveOption' : 'Option'}>Cosmetica Natural</NavLink></button>
                <button className="Botones"><NavLink to={`/category/licores`} className={({ isActive}) =>isActive? 'ActiveOption' : 'Option'}>Licores</NavLink></button>
                <button className="Botones"><NavLink to={`/category/textil`} className={({ isActive}) =>isActive? 'ActiveOption' : 'Option'}>Textiles</NavLink></button>
                <div className="Cart-widget">
                    <CartWidget/>
                </div>

           </div>
        </nav>          
    )
}

export default NavBar



