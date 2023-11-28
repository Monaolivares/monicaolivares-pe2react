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
                <Link to='/'> Botica Bosque </Link>
                <NavLink to={`/category/cosmetica natural`} className={({ isActive}) =>isActive? 'ActiveOption' : 'Option'}>Cosmetica Natural</NavLink>
                <NavLink to={`/category/textiles`} className={({ isActive}) =>isActive? 'ActiveOption' : 'Option'}>Textiles</NavLink>
                <NavLink to={`/category/licores`} className={({ isActive}) =>isActive? 'ActiveOption' : 'Option'}>Licores</NavLink>
            <div className="navCategorias">
               
     
     </div>
     <div className="Cart-widget">
         <CartWidget/>
     </div>

           </div>
        </nav>          
    )
}

export default NavBar



