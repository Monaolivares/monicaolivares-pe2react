import React from "react"; 
import ReactDom from "react-dom/client"; 
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect} from "react";
import "./Item.css"; 
import { getProducts, getProductbyCategory, getProductsById } from "../../dataProducts";
import { useParams } from "react-router-dom";


const Item = ({id, name, img, price, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader"> {name} </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>?
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>

        </article>
    )
}


export default Item