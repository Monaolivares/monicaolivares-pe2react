import React from "react";
import ReactDom from 'react-dom/client'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; 
import { useParams } from "react-router-dom";
import { createContext } from "react";




// componentes
import NavBar from "./components/NavBar/NavBar"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount"; 
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart"; 

function App(){
    return(
        <div className="App">
             <BrowserRouter>
             <CartProvider>
                <NavBar/>
                    <Routes>
                    <Route path='/' element={<ItemListContainer />}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                    <Route path='/cart' element={<Cart/>} /> 
                    <Route path='*' element={<h1>Ups, no encontramos la pagina que querias. Devuelvete que te pasaste .</h1>}/>
                    </Routes>
                </CartProvider>
                </BrowserRouter>
           
         
        </div>
       
    )
}
export default App; 


/*  <BrowserRouter>
                <NavBar>
                </NavBar>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:categoryId" />
                    <Route path="/item/:itemId" />
                    <Route path="*" element={<h1>Ups, no encontramos lo que estabas buscando... perdon</h1>}/>
                </Routes>
            
            
            </BrowserRouter> */