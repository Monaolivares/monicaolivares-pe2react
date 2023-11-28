import React from "react"; 
import ReactDom from "react-dom/client"; 
import { BrowserRouter } from "react-router-dom";
import {useState} from "react"; 
import "./ItemCount.css"; 


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
            
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }
    return(
        <div className="Contador">
            <div className="Controls">
                <button class="BotonContador" onClick={decrement}> - </button>
                <h4 className="NumeroContador">{quantity}</h4>
                <button className="BotonContador" onClick={increment}> + </button>
            </div>
            <div>
                <button className="BotonCarrito" onClick={() => onAdd(quantity)} disabled={!stock}> Agregar al Carrito</button>
            </div>
        </div>
    )
}
export default ItemCount