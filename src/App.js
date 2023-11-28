import React from "react";
import ReactDom from 'react-dom/client'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; 


// componentes
import NavBar from "./components/NavBar/NavBar"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount"; 
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App(){
    return(
        <div className="App">
             <BrowserRouter>
             <NavBar/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer/>}></Route>
                        <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
                        <Route path="item/:itemId" element={<ItemDetailContainer/>} ></Route>u
                       
                    </Routes>
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