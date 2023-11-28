import React from "react"; 
import ReactDom from "react-dom/client"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ItemListContainer.css"; 
import { getProducts, getProductsById, getProductbyCategory } from "../../dataProducts";
import {useParams} from "react-router-dom"

//components
import ItemList from "../ItemList/ItemLIst"; 

const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()


 
    useEffect(() => {
        const asyncFunc = categoryId ? getProductbyCategory : getProducts
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])
    return (
        <div>
            <h1>
               {greetings}
            </h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer