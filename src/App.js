import React from "react";
import ReactDom from 'react-dom/client'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; 
import { useParams } from "react-router-dom";


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
                    <Route path='/' element={<ItemListContainer />}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                    <Route path='*' element={<h1>404 NOT FOUND PAGE</h1>}/>
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