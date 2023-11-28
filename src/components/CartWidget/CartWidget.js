import React from "react"; 
import ReactDom from "react-dom/client"; 
import { BrowserRouter } from "react-router-dom";
import "./CartWidget.css"; 

import cart from "../../img/cart-icon.png"
const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget