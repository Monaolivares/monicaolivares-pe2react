import React from "react"; 
import ReactDom from "react-dom/client"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ItemListContainer.css"; 
import { getProducts, getProductById, getProductbyCategory } from "../../dataProducts";
import {useParams} from "react-router-dom"; 
import {getDocs, collection, query, where, doc} from "firebase/firestore"; 
import {db} from '../../services/firebase/firebaseConfig'; 

//components
import ItemList from "../ItemList/ItemLIst"; 

const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()


 
    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
        
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(docs => {
                    const data = docs.data()
                    return {id:doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
     
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
    return (
        <div>
            <h1>
               {greetings}
            </h1>
            <section>
            <ItemList products={products}/>
            </section>
            
        </div>
    )
}

export default ItemListContainer