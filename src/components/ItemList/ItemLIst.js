import React, { useEffect } from "react"; 
import ReactDom from "react-dom/client"; 
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./ItemList.css"; 
import { getProducts } from "../../dataProducts";

import Item from "../Item/Item"

const ItemList = ({products}) => {
        return(
            <div className="ListaProductos">
                {products.map(prod => <Item key={prod.id} {...prod}/>)}

            </div>
        )
}


export default ItemList